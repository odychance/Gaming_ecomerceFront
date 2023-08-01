import styles from './GridGames.module.scss'
import Link from 'next/link'
import { map } from 'lodash'
import { fn } from '@/utils'
import { Label } from '../Label'
import { ENV } from '@/utils/constants'

const GridGames = (props) => {

    const { games } = props

    return (
    <div className={styles.gridGames}>
        {map(games, (game) => (
            <Link key={game.id} href={`/${game.attributes.slug}`} className={styles.game}>
                <div>
                    <img src={`${ENV.SERVER_HOST}${game.attributes.cover.data.attributes.url}`} alt='Galeria de imagenes'/>
                
                    {game.attributes.discount > 0 && (
                        <Label.Discount className={styles.discount}>
                            {`-${game.attributes.discount}`}
                        </Label.Discount>
                    )}
                </div>

                <div>
                    <span>{game.attributes.title}</span>
                    <span className={styles.price}>${fn.calcDiscountedPrice(game.attributes.price, game.attributes.discount)}</span>
                </div>
            </Link>
        ))}
    </div>
  )
}

export { GridGames }