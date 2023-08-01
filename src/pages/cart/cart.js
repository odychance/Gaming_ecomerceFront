import { useState, useEffect } from "react"
import { useCart } from "@/hooks"
import { CartLayout } from "@/layouts"
import { useRouter } from "next/router"
import { Game } from "@/api"
import { Cart } from "@/components/Cart"
import { Seo } from "@/components/Shared"

const gameCtrl = new Game()

const CartPage = () => {

  const { query: { step = 1} } = useRouter()
  const currentStep = Number(step)
  const { cart } = useCart()

  const [ games, setGames ] = useState(null)

  useEffect(() => {
    (async () => {
      try {
        const data = []

        for await (const item of cart) {
          const response = await gameCtrl.getGameById(item.id)
          data.push({ ...response.data, quantity: item.quantity })
        }
        
        setGames(data)
      } catch (error) {
        console.error(error)
      }
    })()
  }, [cart])

  return (
    <>

      <Seo title="Gaming - Carrito" />

      {games ? (
          <CartLayout>
            {currentStep === 1 && <Cart.StepOne games={games}/>}
            {currentStep === 2 && <Cart.StepTwo games={games} />}
            {currentStep === 3 && <Cart.StepThree />}
          </CartLayout>

      ) : null}
    </>
  )
}

export default CartPage