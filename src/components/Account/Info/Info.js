import styles from './info.module.scss'
import { useAuth } from '@/hooks'
import { DateTime } from 'luxon'

const Info = () => {

    const data = useAuth()
    const {user} = data

    return (
    <div className={styles.info}>
        <button className={styles.user}>
            <img src="/svg/user.svg" alt="user icon" />
        </button>
        { user ? (
            <>
                <h3 className={styles.username}>{user.username}</h3>
                <h4 className={styles.email}> {user.email}</h4>
                <p className={styles.createdAt}>Miembro desde: {DateTime.fromISO(user.createdAt, { locale: "es" }).toFormat("DDD")}</p>
            </>
        ) : null }
    </div>
  )
}

export {Info}