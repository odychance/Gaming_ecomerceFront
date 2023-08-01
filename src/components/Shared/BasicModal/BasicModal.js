import React from 'react'
import styles from './BasicModal.module.scss'
import { ButtonClose } from '@/components/ButtonClose'
import classNames from 'classnames'


const BasicModal = (props) => {

  const { children, show, onOpenClose, title } = props

  return (
      <div  className={classNames(styles.containerModal, { [styles.active]: show } )}>

        <div className={styles.closeBtn} onClick={onOpenClose}>
          <ButtonClose />
        </div>

        <div className={styles.modalContent}>
          <div className={styles.header}>{title}</div >
          <div className={styles.content}>{children}</div>
        </div>
      </div>
  )
}

export {BasicModal}