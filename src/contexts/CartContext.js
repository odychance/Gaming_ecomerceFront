import { useState, useEffect, createContext } from "react";
import { Cart } from "@/api";

const cartCtrl = new Cart()

export const CartContext = createContext()

export function CartProvider(props) {
    const { children } = props
    const [ cart, setCart ] = useState(null)
    const [ total, setTotal ] = useState(cartCtrl.count())

    useEffect(() => {
        const response = cartCtrl.getAll()
        setCart(response)
    }, [])

    const addCart = (gameId) => {
        cartCtrl.add(gameId)
        refresTotalCart()
    }

    const changeQuantityItem = (gameId, quantity) => {
        cartCtrl.changeQuantity(gameId, quantity)
        refresTotalCart()
    }

    const deleteItem = (gameId) => {
        cartCtrl.delete(gameId)
        refresTotalCart()
    }

    const deleteAllItems = () => {
        cartCtrl.deleteAll()
        refresTotalCart()
    }

    const refresTotalCart = () => {
        setTotal(cartCtrl.count())
        setCart(cartCtrl.getAll())
    }

    const data = {
        cart,
        addCart,
        total,
        deleteItem,
        deleteAllItems: () => {},
        changeQuantityItem,
        deleteAllItems,
    }

    return <CartContext.Provider value={data}>{children}</CartContext.Provider>
}