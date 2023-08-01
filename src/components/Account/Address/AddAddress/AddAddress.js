import { useState } from 'react'
import styles from './AddAddress.module.scss'
import { Button } from '@/components/Button'
import { BasicModal } from '@/components/Shared'
import { AddresForm } from '../AddressForm'

const AddAddress = (props) => {

  const [ show, setShow ] = useState(false)

  const { onReload } = props

  const onOpenClose = () => setShow((prevState) => !prevState)


  return (
    <>
      <div className={styles.addBtn} onClick={onOpenClose}>
        <Button>Crear</Button>
      </div>

      <BasicModal
        show={show}
        onOpenClose={onOpenClose}
        title="Nueva direccion"
      >
        <AddresForm
          show={show}
          onOpenClose={onOpenClose}
          onReload={onReload}
        />
      </BasicModal>
    </>
  )
}

export { AddAddress }