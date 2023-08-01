import React from 'react'
import { JoinLayout } from '@/layouts'
import { LoginForm } from '@/components/Auth/LoginForm'
import styles from './sign-in.module.scss'
import Link from 'next/link'
import { useAuth } from '@/hooks'
import { useRouter } from 'next/router'
import { Seo } from '@/components/Shared'

const SignInPage = () => {
  
  return (
    <>

      <Seo title="Iniciar Sesión"/>

      <JoinLayout>
        <div className={styles.signIn}>
            <h3>Iniciar Sesión</h3>

            <LoginForm />

            <div className={styles.actions}>
              <Link href="/join/sign-up">
                ¿No tienes una cuenta?
              </Link>
            </div>
        </div>
      </JoinLayout>
    </>
  )
}

export default SignInPage