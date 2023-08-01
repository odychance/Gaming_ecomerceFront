import React from 'react'
import { Button } from '@/components/Button'
import Link from 'next/link'
import styles from './StepThree.module.scss'

const StepThree = () => {
  return (
    <div className={styles.stepThree}>
      <img src="/svg/check.svg" alt="Checked" className={styles.checkIcon}/>
      <h2>¡Compra exitosa!</h2>

      <Link href="/account">
        <Button>
          Ver Pedido
        </Button>
      </Link>
    </div>
  )
}

export { StepThree }