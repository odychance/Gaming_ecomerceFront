import styles from './Panel.module.scss'
import { useState } from 'react'
import { fn } from '@/utils'
import { Button } from '@/components/Button'
import { Container, WishlistIcon } from '@/components/Shared'
import { ENV } from '@/utils/constants'
import { useCart } from '@/hooks'

const Panel = (props) => {

    const { gameId, game } = props

    const { addCart } = useCart()

    const platform = game.platform.data
    const buyPrice = fn.calcDiscountedPrice(game.price, game.discount)

    const addCartWrapper = () => {
        addCart(gameId)
    }
    
  return (
    <Container>
        <div className={styles.panel}>

            <div className={styles.imgContainer}>
                <img src={`${ENV.SERVER_HOST}${game.cover.data.attributes.url}`} />
            </div>

            <div className={styles.actionsContainer}>
                <div>
                    <h2>{game.title}</h2>

                    <div className={styles.moreInfo}>
                        <span>
                            <img src={`${ENV.SERVER_HOST}${platform.attributes.icon.data.attributes.url}`}/>
                            {platform.attributes.title}
                        </span>
                        <span>
                            <img src='/svg/check.svg'/> En stock
                        </span>
                    </div>

                    <div className={styles.price}>
                        {game.discount > 0 && (
                            <div>
                                <span className={styles.originalPrice}>
                                    <img src='/svg/tag.svg'/>
                                    {game.price}$
                                </span>

                                <span className={styles.discount}>
                                    -{game.discount}%
                                </span>
                            </div>
                        )}

                        <span className={styles.buyPrice}>{buyPrice}$</span>
                    </div>

                    <div onClick={addCartWrapper}>
                        <Button>
                            Comprar ahora
                        </Button>
                    </div>

                    <WishlistIcon gameId={gameId} className={styles.heart} />

                </div>
            </div>
        </div>
    </Container>
  )
}

export { Panel }