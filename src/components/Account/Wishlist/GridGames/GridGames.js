import Link from 'next/link'
import { map } from 'lodash'
import { Label, WishlistIcon } from '@/components/Shared'
import { fn } from '@/utils'
import { ENV } from '@/utils/constants'
import styles from './GridGames.module.scss'

const GridGames = (props) => {

    const { wishlist, onReload } = props

  return (
    <div className={styles.gridGames}>
        {map(wishlist, (item) => {
            const game = item.attributes.game.data
            const cover = game.attributes.cover.data

            return (
                <div key={item.id} className={styles.game}>
                    <Link href={`/${game.attributes.slug}`}>
                        <div className={styles.containerGame}>
                            <div>
                                <img src={`${ENV.SERVER_HOST}${cover.attributes.url}`} />

                                {game.attributes.discount > 0 && (
                                    <Label.Discount className={styles.discount}>
                                        {`-${game.attributes.discount}%`}
                                    </Label.Discount>
                                )}
                            </div>

                            <div>
                                <span>{game.attributes.title}</span>
                                <span className={styles.price}>
                                    {fn.calcDiscountedPrice(
                                        game.attributes.price,
                                        game.attributes.discount)
                                    }$
                                </span>
                            </div>
                        </div>
                    </Link>

                    <WishlistIcon gameId={game.id} className={styles.wishlistIcon} removeCallback={onReload} /> 
                </div>
            )
        })}
    </div>
  )
}

export { GridGames }