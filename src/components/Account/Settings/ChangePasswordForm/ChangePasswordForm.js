import React from 'react'
import styles from './ChangePasswordForm.module.scss'
import { Button } from '@/components/Button'
import { useFormik } from 'formik'
import { initialValues, validationSchema } from '../ChangePasswordForm/ChangePasswordForm.form'
import { User } from '@/api'
import { useAuth } from '@/hooks'

const userCtrl = new User()

const ChangePasswordForm = () => {

  const { user, logout } = useAuth()

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        await userCtrl.updateMe(user.id, { password: formValue.password})
        logout()
      } catch (error) {
        throw error
      }
    }
  })


  return (
    <>
        <form className={styles.form} onSubmit={formik.handleSubmit}>

            <label>Cambiar contraseña</label>

            <input
                className={styles.input}
                name='password'
                type='password'
                placeholder='Nueva contraseña'   
                value={formik.values.password} 
                onChange={formik.handleChange}
                error={formik.errors.password}
            />

            <input
                className={styles.input}
                name='repeatPassword'
                type='password'
                placeholder='Repetir contraseña'
                value={formik.values.repeatPassword}
                onChange={formik.handleChange}
                error={formik.errors.repeatPassword}  
            />

            <Button loading={formik.isSubmitting}>Enviar</Button>

        </form>
    </>
  )
}

export {ChangePasswordForm}