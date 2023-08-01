import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useAuth } from '@/hooks'
import styles from './JoinLayout.module.scss'
import { ButtonClose } from '@/components/ButtonClose'

const JoinLayout = ({children}) => {

  const { user } = useAuth()
  const router = useRouter()

  if(user) {
    router.push('/')
    return null
  }
  
  return (
    <div className={styles.container}>
        <div className={styles.topBar}>
            <Link href="/">
                <img src="/images/logo.png" alt="Gaming" />
            </Link>
            <Link href="/">
                <ButtonClose />
            </Link>
        </div>
        <div className={styles.blockLeft}>{children}</div>
        <div className={styles.blockRight}/>
    </div>
  )
}

export { JoinLayout }