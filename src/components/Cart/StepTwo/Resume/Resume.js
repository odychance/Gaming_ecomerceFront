import { useState, useEffect } from 'react'
import { Button } from '@/components/Button'
import { forEach, map } from 'lodash'
import { useAuth, useCart } from '@/hooks' 
import { Cart } from '@/api'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import { useRouter } from 'next/router'
import { fn } from '@/utils'
import classNames from 'classnames'
import styles from './Resume.module.scss'

const cartCtrl = new Cart()

const Resume = (props) => {

  const { games, addressSelected } = props

  const [ total, setTotal ] = useState(null)
  const [ loading, setLoading ] = useState(false)
  const stripe = useStripe()
  const elements = useElements()
  const { user } = useAuth()
  const router = useRouter()
  const { deleteAllItems } = useCart()

  useEffect(() => {
    let totalTemp = 0

    forEach(games, (game) => {
      const price = fn.calcDiscountedPrice(game.attributes.price, game.attributes.discount)

      totalTemp += price * game.quantity
    })

    setTotal(totalTemp.toFixed(2))
  }, [games])

  const onPay = async () => {
    setLoading(true)
    // goToStepEnd()

    if ( !stripe || !elements )  {
      setLoading(false)
      return
    }

    const cardElement = elements.getElement(CardElement)
    const result = await stripe.createToken(cardElement)

    
    if(result.error) {
      console.error(result.error.message)
    } else {
      const response = await cartCtrl.paymentCart(
        result.token,
        games,
        user.id,
        addressSelected
        ) 
        
      if(response.status === 200) {
        deleteAllItems()
        goToStepEnd()
        
      } else {
        console.error("Error al realizar el pedido")
      }
    }

    setTimeout(() => {
      setLoading(false)
    }, 1000);
  }

  const goToStepEnd = () => {
    router.replace({ query: { ...router.query, step: 3 }})
  }

  if(!total) return null

  return (
    <div className={styles.resume}>
        <h2> Resumen </h2>

        <div className={styles.block}>
          <div className={styles.products}>
            {map(games, (game) => (
              <div key={game.id} className={styles.product}>
                <div>
                  <p>{game.attributes.title}</p>
                  <span>{game.attributes.platform.data.attributes.title}</span>
                </div>
                <span>
                  {game.quantity > 0 && `${game.quantity}x`}
                  {fn.calcDiscountedPrice(game.attributes.price, game.attributes.discount)}$
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.blockTotal}>
          <div>
            <span>Total</span>
            <span>{total}$</span>
          </div>
          
          <div
            className={classNames(styles.button, {[ styles.buttonOff ] : !addressSelected})}
            onClick={onPay}
          >
            <Button>
              {loading ? <div className={styles.ldsDualRing}></div> : <p>PAGAR</p> }

            </Button>
          </div>
        </div>
    </div>
  )
}

export { Resume }