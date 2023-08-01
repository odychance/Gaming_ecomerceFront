import { useState } from 'react'
import styles from './Order.module.scss'
import { DateTime } from 'luxon'
import { forEach, map } from 'lodash'
import { fn } from '@/utils'
import { BasicModal } from '@/components/Shared'
import { ENV } from '@/utils/constants'

const Order = (props) => {

  const { order } = props
  const [ showModal, setShowModal ] = useState(false)

  const createdAt = new Date(order.attributes.createdAt).toISOString()
  const products = order.attributes.products
  const address = order.attributes.addressShipping

  const onOpenClose = () => setShowModal( prevState => !prevState )

  const getTotalProducts = () => {
    let total = 0;

    forEach(products, (product) => {
      total += product.quantity
    })

    return total
  }

  // console.log(`${ENV.SERVER_HOST}${products[0].attributes.cover.data.attributes.url}`)
  return (
    <>
      <div className={styles.order} onClick={onOpenClose}>
        <div>
          <span>{DateTime.fromISO(createdAt, { locale: "es"}).toFormat("dd/MM/yyyy")}</span>
          <p>{getTotalProducts()} Productos</p>
        </div>

        <p>{order.attributes.totalPayment.toFixed(2)}$</p>
      </div>

      <BasicModal show={showModal} onOpenClose={onOpenClose} title="Informacion del pedido">
        {map(products, (product) => (
          <div className={styles.product}>
            <img src={`${ENV.SERVER_HOST}${product.attributes.cover.data.attributes.url}`} />
          
            <div>
              <div className={styles.info}>
                <div>
                  <p>{product.attributes.title}</p>
                  <p>{product.attributes.platform.data.attributes.title}</p>
                </div>
              </div>

              <div className={styles.quantity}>
                <span>x{product.quantity}</span>
                <span>{fn.calcDiscountedPrice(product.attributes.price, product.attributes.discount)}$</span>
              </div>

            </div>

          </div>
        ))}

        <div className={styles.address}>
          <div>
            <p className={styles.title}>{address.attributes.title}</p>
            <p className={styles.addressInfo}>
              {address.attributes.name}, {address.attributes.address}, {" "}
              {address.attributes.state}, {address.attributes.city}, {" "}
              {address.postal_code}
            </p>
          </div>
        </div>

        <div className={styles.total}>
          <p>TOTAL: {order.attributes.totalPayment.toFixed(2)}$</p>
        </div>
      </BasicModal>
    </>
  )
}

export { Order }