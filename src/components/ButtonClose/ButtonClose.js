import React from 'react'
import styles from "./ButtonClose.module.scss"

const ButtonClose = () => {
  return (
    <>
        <button className={styles.containerButtonClose}>
            <div className={styles.lineButton1}></div>
            <div className={styles.lineButton2}></div>
        </button>

    </>
  )
}

export default ButtonClose