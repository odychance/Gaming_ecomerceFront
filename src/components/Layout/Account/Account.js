import styles from './Account.module.scss'
import { Button } from '@/components/Button'
import { useRouter } from 'next/router'
import { useAuth, useCart } from '@/hooks'

const Account = () => {

    const { user } = useAuth()
    const router = useRouter()
    const { total } = useCart()

    const goToLogin = () => router.push("/join/sign-in")
    const goToAccount = () => router.push("/account")

    const goToCart = () => {

        if (user) {
            router.push("/cart")
        } else {
            goToLogin()
        }
    }

  return (
    <div className={styles.account}>
        <Button>
            <img src='/svg/cart.svg' alt='cart' className={styles.cart} onClick={goToCart}/>
            {total > 0 && <label className={styles.total}>{total}</label>}
        </Button>

        {!user ? (
            <Button>
                <img src='/svg/user.svg' alt='user' className={styles.user} onClick={goToLogin} />
            </Button>
    ) : (
            <Button>
                <img src='/svg/bell.svg' alt='bell' className={styles.bell} onClick={goToAccount} />
            </Button>
        )}
    </div>
  )
}

export { Account }