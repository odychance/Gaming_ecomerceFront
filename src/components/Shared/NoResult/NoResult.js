import React from 'react'
import styles from './NoResult.module.scss'

const NoResult = (props) => {
    const { text } = props

  return (
    <div className={styles.noResult}>
        <p>{text}</p>
    </div>
  )
}

export { NoResult }