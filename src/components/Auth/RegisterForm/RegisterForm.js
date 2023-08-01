import React from 'react'
import styles from './RegisterForm.module.scss'
import { Button } from '@/components/Button'
import { useFormik } from 'formik'
import { Auth } from '@/api'
import { useRouter } from 'next/router'
import { initialValues, validationSchema } from './RegisterForm.form'

const authCtrl = new Auth()

const RegisterForm = () => {

    const router = useRouter()

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: validationSchema(),
        validationOnChange: false,
        onSubmit: async (formValue) => {
            try {
                await authCtrl.register(formValue)  
                router.push('/join/sign-in')
            } catch (error) {
                console.error(error)
            }
        }
    })

  return (
    <>
        <form className={styles.formContainer} onSubmit={formik.handleSubmit}>
            <div className={styles.formGroup}>
                <input
                    className={styles.formInput}
                    name='email'
                    type='text'
                    placeholder='Correo electronico'
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.errors.email}/>

                <input
                    className={styles.formInput}
                    name='username'
                    type='text'
                    placeholder='Nombre de usuario'
                    value={formik.values.username}
                    onChange={formik.handleChange}
                    error={formik.errors.username}/>
            </div>

            <div className={styles.formGroup}>
                <input
                    className={styles.formInput}
                    name='name'
                    type='text'
                    placeholder='Nombre y apellidos'
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    error={formik.errors.name}/>

                <input
                    className={styles.formInput}
                    name='password'
                    type='password' placeholder='contraseña'
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={formik.errors.password}/>
                </div>

            <Button type="submit" > Registrarse </Button>
            
        </form>
    </>
  )
}

export { RegisterForm }