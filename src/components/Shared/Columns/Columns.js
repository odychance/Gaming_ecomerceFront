import React from 'react'
import styles from './Colums.module.scss'

const Columns = ({children}) => {
  return (
    <div className={styles.columns}>
        {children}
    </div>
  )
}

export { Columns }