import styles from './HeaderCart.module.scss'
import Link from 'next/link'
import { map } from 'lodash'
import { useRouter } from 'next/router'
import classNames from 'classnames'


const HeaderCart = () => {

    const { query: { step = 1 } } = useRouter()

    const currentStep = step
    
    const steps = [
        { number: 1, title: "Cesta" },
        { number: 2, title: "Pago" },
        { number: 3, title: "Confirmacion" }
    ]

  return (
    <div className={styles.headerCart}>
        <div className={styles.left}>
            <Link href="/" className={styles.logo}>
                <img src='/images/logo.png' alt="gaming" />
            </Link>
        </div>

        <div className={styles.center}>
            {map(steps, step => (
                <div key={step.number} className={classNames({
                    [styles.active]: step.number === Number(currentStep),
                    [styles.success]: step.number < Number(currentStep)
                })}>
                    <span className={styles.number}>
                        <img src='/svg/check.svg' alt="check" className={styles.checkIcon}/>
                        {step.number}
                    </span>
                    <span>{step.title}</span>
                    <span className={styles.space}/>
                </div>
            ))}
        </div>

        <div className={styles.right}>
                <img src='/svg/lock.svg' alt='lock' />
                <div>
                    <span>Pago seguro</span>
                    <span>256-bit SSL Secure</span>
                </div>
        </div>
    </div>
  )
} 

export { HeaderCart }