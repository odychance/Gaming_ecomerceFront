import React from 'react'
import styles from './ChangeNameForm.module.scss'
import { Button } from '@/components/Button'
import { useFormik } from 'formik'
import { initialValues, validationSchema } from './ChangeNameForm.form'
import { useAuth } from '@/hooks'
import { User } from '@/api'
import { Separator } from '@/components/Shared'

const userCtrl = new User()

const ChangeNameForm = () => {

  const { user } = useAuth()

  const formik = useFormik({
    initialValues: initialValues(user.firstname, user.lastname),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        await userCtrl.updateMe(user.id, formValue)
      } catch (error) {
        console.log("error")
      }
    }
  })
  return (
    <>
      <form className={styles.containerForm} onSubmit={formik.handleSubmit}>
        <label className={styles.labelTxt}>Nombre y apellidos</label>
        <div className={styles.inputAndBtn}>

          <input  className={styles.input}
                  name="firstname"
                  type='text'
                  placeholder='Nombre y apellidos'
                  value={formik.values.firstname}
                  onChange={formik.handleChange}
                  error={formik.errors.firstname}/>

          <input  className={styles.input}
                  name="lastname"
                  type='text'
                  placeholder='Nombre y apellidos'
                  value={formik.values.lastname}
                  onChange={formik.handleChange}
                  error={formik.errors.lastname}/>

          <Button type="submit" loading={formik.isSubmitting}>Enviar</Button>
        </div>
      </form>
    </>
  )
}

export {ChangeNameForm} 