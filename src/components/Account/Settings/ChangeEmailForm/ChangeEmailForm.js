import React from 'react'
import styles from './ChangeEmailForm.module.scss'
import { Button } from '@/components/Button'
import { useFormik } from 'formik'
import { initialValues, ValidationSchema } from './ChangeEmailForm.form'
import { User } from '@/api'
import { useAuth } from '@/hooks'

const userCtrl = new User()

const ChangeEmailForm = () => {

  const { user, updateUser } = useAuth()

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: ValidationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        await userCtrl.updateMe(user.id, {email: formValue.email})
        updateUser("email", formValue.email)
        formik.handleReset()
      } catch (error) {
        console.error(error)
      }
    }
  })

  return (
    <form onSubmit={formik.handleSubmit} className={styles.form}>
      <label className={styles.label}> Cambiar correo electronico </label>

      <input
        className={styles.input}
        name='email'
        type='text'
        placeholder="Nuevo correo electronico"
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.errors.email}/>

      <input
        className={styles.input}
        name='repeatEmail'
        type='text'
        placeholder="Repetir correo electronico"
        value={formik.values.repeatEmail}
        onChange={formik.handleChange}
        error={formik.errors.repeatEmail}
        />

      <Button type="submit" loading={formik.isSubmitting}>Enviar</Button>
    </form>
  )
}

export { ChangeEmailForm }