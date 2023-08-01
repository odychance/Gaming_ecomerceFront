import styles from './Dropdown.module.scss'
import { useEffect, useState } from 'react'
import { map } from 'lodash'
import { useCart } from '@/hooks'

const Dropdown = (props) => {

  const { game } = props
  const { changeQuantityItem } = useCart()

  const [ value, setValue ] = useState("")

  const defaultValues = {
    one : 1,
    two : 2, 
    three : 3,
    four: 4, 
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    teen: 10,
  }

  const handleChange = e => {
    setValue(e.target.value)
  }

  return (
    <div className={styles.containerDropdown}>
      <select
          value={game.quantity}
          onChange={(data) => changeQuantityItem(game.id, Number(data.target.value))}
      >
          <option value={defaultValues.one}>1</option>
          <option value={defaultValues.two}>2</option>
          <option value={defaultValues.three}>3</option>
          <option value={defaultValues.four}>4</option>
          <option value={defaultValues.five}>5</option>
          <option value={defaultValues.six}>6</option>
          <option value={defaultValues.seven}>7</option>
          <option value={defaultValues.eight}>8</option>
          <option value={defaultValues.nine}>9</option>
          <option value={defaultValues.teen}>10</option>
      </select>
    </div>  )
}

export { Dropdown }