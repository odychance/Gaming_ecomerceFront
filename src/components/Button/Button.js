import React from 'react'
import styles from './Button.module.scss'

const Button = ({children}) => {
  return (
    <button className={styles.Button} type="submit">{children}</button>
  )
}

export { Button }