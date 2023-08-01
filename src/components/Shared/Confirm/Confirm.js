import styles from './Confirm.module.scss'
import classNames from 'classnames'
import { Button } from '@/components/Button'

const Confirm = (props) => {

    const { show, openCloseConfirm, onDelete } = props

    return (
    <div className={classNames(styles.confirmModal, {[styles.active] : show})}>
        
        <div className={styles.container}>
            <h2 className={styles.modalTxt}>¿Estas seguro que deseas eliminar esta dirección?</h2>

            <div className={styles.containerBtns}>
                <div className={styles.btnCancel} onClick={openCloseConfirm}>
                    <Button>
                        <img src="/svg/close2.svg" alt='close2 icon' className={styles.svgIcon}/>
                    </Button>
                </div>
                <div className={styles.btnOk} onClick={onDelete}>
                    <Button>
                        <img src="/svg/delete.svg" alt='delete icon' className={styles.svgIcon}/>
                    </Button>
                </div>
            </div>
        </div>
    </div>
  )
}

export { Confirm }