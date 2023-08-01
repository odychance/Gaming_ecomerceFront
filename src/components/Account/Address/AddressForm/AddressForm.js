import styles from './AddressForm.module.scss'
import { Button } from '@/components/Button'
import { useFormik } from 'formik'
import { initialValues, validationSchema } from './AddressForm.form'

import { useAuth } from '@/hooks'
import { Address } from '@/api'
const AddressCtrl = new Address()

const AddresForm = (props) => {
    
    const { onOpenClose, onReload, addressId, address, onClose } = props
    const { user } = useAuth()

    const formik = useFormik({
        initialValues: initialValues(address),
        validationSchema: validationSchema(),
        validateOnChange: false,
        onSubmit: async (formValue) => {
            try {

                if(addressId) {
                    await AddressCtrl.update(formValue, addressId)
                    onClose()
                } else {
                    await AddressCtrl.create(formValue, user.id)
                    onOpenClose()
                }
                
                formik.handleReset()
                onReload()
            } catch (error) {
                console.error(error)
                // console.log(user)
            }
        }
    })

  return (
    <form className={styles.formContainer} onSubmit={formik.handleSubmit}>

        <input 
            className={styles.input}
            name="title"
            placeholder='Titulo de la direccion'
            value={formik.values.title}
            onChange={formik.handleChange}
            error={formik.errors.title}
        />

        <div className={styles.equal}>

            <input
                className={styles.input}
                name="name"
                placeholder="Nombre y apellidos"
                value={formik.values.name}
                onChange={formik.handleChange}
                error={formik.errors.name}
            />

            <input
                className={styles.input}
                name="address"
                placeholder="Dirección"
                value={formik.values.address}
                onChange={formik.handleChange}
                error={formik.errors.address}
            />
        </div>

        <div className={styles.equal}>
            <input
                className={styles.input}
                name="state"
                placeholder="Provincia"
                value={formik.values.state}
                onChange={formik.handleChange}
                error={formik.errors.state}
            />

            <input
                className={styles.input}
                name="city"
                placeholder="Ciudad"
                value={formik.values.city}
                onChange={formik.handleChange}
                error={formik.errors.city}
                />

        </div>

        <div className={styles.equal}>
            <input
                className={styles.input}
                name="postal_code"
                placeholder="Codigo postal"
                value={formik.values.postal_code}
                onChange={formik.handleChange}
                error={formik.errors.postal_code}
                />

            <input
                className={styles.input}
                name="phone"
                placeholder="Telefono"
                value={formik.values.phone}
                onChange={formik.handleChange}
                error={formik.errors.phone}
            />

        </div>

        <div className={styles.containerBtn} type="submit">
            <Button >Enviar</Button>
        </div>
    </form>
  )
}

export {AddresForm}