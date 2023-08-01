import styles from './TopBar.module.scss'
import { Account } from '../Account'
import Link from 'next/link'
import { Menu } from '../Menu'

const TopBar = ( props ) => {
    const { isOpenSearch } = props


  return (
    <div className={styles.topBar}>
        <div className={styles.left}> 
            <Link href="/">
                <img src="/images/logo.png" alt='logo pagina' />
            </Link>
        </div>

        <div className={styles.center}>
            <Menu isOpenSearch={isOpenSearch}/>
        </div>

        <div className={styles.right}>
            <Account />
        </div>
    </div>
  )
}

export {TopBar}