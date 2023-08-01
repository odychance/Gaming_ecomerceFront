import styles from './Addresses.module.scss'
import { Address } from '@/api'
import { useAuth } from '@/hooks'
import { useState, useEffect } from 'react'
import { map } from 'lodash'
import classNames from 'classnames'

const addressCtrl = new Address()

const Addresses = (props) => {

    const { addressSelected, setAddressSelected } = props

    const [ addresses, setAddresses ] = useState(null)
    const { user } = useAuth()

    useEffect(() => {
        ( async ()  => {
            try {
                const response = await addressCtrl.getAll(user.id)
                setAddresses(response.data)
            } catch (error) {
                console.error(error)
            }
        })()
    }, [])

  return (
    <div className={styles.addresses}>
        <h2>Direccion</h2>

        {map(addresses, (address) => (
            <div
                key={address.id}
                onClick={() => setAddressSelected(address)}
                className={classNames(styles.address, { [styles.active] : address.id === addressSelected?.id })}
            >
                <p>{address.attributes.name} ({address.attributes.title})</p>
                <p>{address.attributes.address}, {address.attributes.postal_code}, {address.attributes.state}, {address.attributes.city}</p>
            </div>
        ))}
    </div>
  )
}

export { Addresses }