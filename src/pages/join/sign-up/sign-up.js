import React from 'react'
import Link from 'next/link'
import { RegisterForm } from '@/components/Auth/RegisterForm'
import { JoinLayout } from "@/layouts"
import styles from './sign-up.module.scss'
import { Seo } from '@/components/Shared'

const SignUpPage = () => {
  return (
    <>

      <Seo title="Registrarse"/>

      <JoinLayout>
          <div className={styles.signIn}>
            <h3>Crear Cuenta</h3>

            <RegisterForm />

            <div className={styles.actions}>
              <Link href="/join/sign-in">Atras</Link>
            </div>
        </div>
      </JoinLayout>
    </>
  )
}

export default SignUpPage