import styles from './Basket.module.scss'
import { map } from 'lodash'
import { fn } from '@/utils'
import { useCart } from '@/hooks'
import { Dropdown } from './Dropdown'
import { ENV } from '@/utils/constants'

const Basket = (props) => {
    
    const { games } = props
    const { deleteItem } = useCart()

    return (
    <div className={styles.basket}>
        <h2>CESTA</h2>

        <div className={styles.block}>
            {map(games, (game) => (
                <div key={game.id} className={styles.product}>
                    <img src={`${ENV.SERVER_HOST}${game.attributes.cover.data.attributes.url}`} alt='cover' className={styles.img}/>
                    <div>
                        <div className={styles.info}>
                            <div>
                                <p>{game.attributes.title}</p>
                                <p>{game.attributes.platform.data.attributes.title}</p>
                            </div>
                            <img src="/svg/delete.svg" alt='delete' className={styles.delete} onClick={() => deleteItem(game.id)}/>
                        </div>

                        <div className={styles.quantity}>
                            <Dropdown game={game}/>
                            <span>{fn.calcDiscountedPrice(game.attributes.price, game.attributes.discount)}$</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export { Basket }