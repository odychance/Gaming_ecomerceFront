import styles from './Discount.module.scss'
import classNames from 'classnames'

const Discount = (props) => {

    const { children, className } = props

  return (
    <span className={classNames(styles.labelDiscount, { [className] : className })}>
        {children}
    </span>
  )
}

export {Discount}