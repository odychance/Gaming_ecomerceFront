import styles from './Address.module.scss'
import { Button } from '@/components/Button'
import { AddresForm } from '../../AddressForm'
import { BasicModal, Confirm } from '@/components/Shared'
import { useState } from 'react'
import { Address as AddressCtrl } from '@/api'

const addressCtrl = new AddressCtrl()

const Address = (props) => {

    const [ showEdit, setShowEdit ] = useState(false)
    const [ showConfirmModal, setShowConfirmModal ] = useState(false)

    const { addressId, address, onReload } = props

    const openCloseEdit = () => setShowEdit((prevState) => !prevState)
    const openCloseConfirm = () => setShowConfirmModal((prevState) => !prevState)

    const onDelete = async () => {
        try {
            await addressCtrl.delete(addressId)
            onReload()
        } catch (error) {
            console.error(error)
        }
    }

  return (
    <>
        <div className={styles.address}>
            <div>
                <p className={styles.title}>{address.title}: </p>
                <p className={styles.addressInfo}>
                    {address.name}, {address.address}, {address.state}, {address.city}, {address.postal_code}
                </p>
            </div>

            <div className={styles.actions}>
                <Button>
                    <img src="/svg/edit.svg" alt='edit icon' className={styles.svgIcon} onClick={openCloseEdit}/>
                </Button>
                <Button>
                <img src="/svg/delete.svg" alt='delete icon' className={styles.svgIcon} onClick={openCloseConfirm}/>
                </Button>
            </div>
        </div>

        <Confirm show={showConfirmModal} openCloseConfirm={openCloseConfirm} onDelete={onDelete}/>

        <BasicModal show={showEdit} onOpenClose={openCloseEdit} title="Editar dirección">
            <AddresForm onClose={openCloseEdit} onReload={onReload} addressId={addressId} address={address} />
        </BasicModal>
    </>
  )
}

export { Address }