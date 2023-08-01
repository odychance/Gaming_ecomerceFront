import { useState, useEffect } from 'react'
import { Game } from '@/api'
import { DateTime } from 'luxon'
import Link from 'next/link'
import styles from './BannerLastGamePublished.module.scss'
import { ENV } from '@/utils/constants'
import { fn } from '@/utils/functions'
import { Label } from '@/components/Shared'

const gameCtrl = new Game()

const BannerLastGamePublished = () => {

    const [ game, setGame ] = useState(null)

    useEffect(() => {
        (async () => {
            try {
                const response = await gameCtrl.getLastPublished()
                setGame(response.data[0])

            } catch (error) {
                console.error(error)
            }
        } )()
    }, [])

    if(!game) return null

    const wallpaper = game.attributes.wallpaper

    const releaseDate = new Date(game.attributes.releaseDate).toISOString()


    const price = fn.calcDiscountedPrice(game.attributes.price, game.attributes.discount)

    return (
    <div className={styles.container}>
        <div className={styles.containerImg}>
            <img src={`${ENV.SERVER_HOST}${wallpaper.data.attributes.url}`} alt="wallpaper" className={styles.wallpaper} />
        </div>

        <Link className={styles.infoContainer} href={game.attributes.slug}>
            <div className={styles.containerLink}>
                <span className={styles.date}>{DateTime.fromISO(releaseDate).minus({ days: 1}).toRelative()}</span>

                <h2>{game.attributes.title}</h2>

                <span className={styles.price}>
                    <Label.Discount>-{game.attributes.discount}%</Label.Discount>
                    <span className={styles.finalPrice}>
                        {price}$
                    </span>
                </span>
            </div>
        </Link>
    </div>
  )
}

export { BannerLastGamePublished }