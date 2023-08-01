import React from 'react'
import styles from './LoginForm.module.scss'
import { Button } from '@/components/Button'
import { useFormik } from 'formik'
import { useAuth } from '@/hooks'
import { Auth } from '@/api'
import { useRouter } from 'next/router'
import { initialValues, validationSchema } from './LoginForm.Form'


const authCtrl = new Auth()

const LoginForm = () => {

    const router = useRouter()
    const { login } = useAuth()
    // console.log(useAuth())

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: validationSchema(),
        validateOnChange: false,
        onSubmit: async (formValue) => {
            try {
                const response = await authCtrl.login(formValue) 
                login(response.jwt)
                // console.log(response)
                // router.push('/')
            } catch (error) {
                console.error(error)
            }
        }
    })
  return (
    <>
        <form className={styles.formContainer} onSubmit={formik.handleSubmit}>
            <input
                className={styles.formInput}
                name="identifier"
                type="text"
                placeholder="Correo electronico o nombre de usuario"
                value={formik.values.identifier}
                onChange={formik.handleChange}
                error={formik.errors.identifier}
            />
            <input
                className={styles.formInput}
                name="password"
                type="password"
                placeholder="Contraseña"
                value={formik.values.password}
                onChange={formik.handleChange}
                error={formik.errors.password}
            />

            <Button type="submit" loading={formik.isSubmitting}>Entrar</Button>
        </form>
    </>
  )
}

export { LoginForm }