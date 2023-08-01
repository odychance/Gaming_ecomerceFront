import React from 'react'
import styles from './Payment.module.scss'
import { CardElement } from '@stripe/react-stripe-js'

const Payment = () => {

  const cardStyle = {
    style: {
      base: {
        color: "#fff",
        fontSize: "16px",
        "::placeholder": {
          color: "#909090"
        }
      }
    }
  }

  return (
    <div className={styles.payment}>
      <h2>Metodos de pago</h2>

      <div className={styles.block}>
        {/* <div className={styles.inputContainer}>
          <label>Numero de targeta <span>*</span></label>
          <input placeholder='1234 / 1234 / 1234 / 1234' />

          <div className={styles.cardVerify}>
            <div className={styles.left}>
              <label>Fecha de caducidad <span>*</span></label>
              <input placeholder='MM / AA'></input>
            </div>

            <div className={styles.right}>
              <label>Codigo de verificación <span>*</span></label>
              <input placeholder='CVC'></input>
            </div>
          </div> */}

        <CardElement options={cardStyle}/>
        </div>
      </div>
    // </div>
  )
}

export { Payment }