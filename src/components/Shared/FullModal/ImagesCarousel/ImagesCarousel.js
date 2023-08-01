import { map } from 'lodash'
import styles from './ImagesCarousel.module.scss'
import { ENV } from '@/utils/constants'

const ImagesCarousel = (props) => {

    const { screenshots, focusedImage, setFocusedImage } = props

    return (
        <div className={styles.principalContainer}>

            <img src={focusedImage} className={styles.backgroundImage}/>

            <div className={styles.carouselContainer}>
                { map(screenshots, (screenshot) => (
                    <div className={styles.carousel} key={screenshot.id}>
                        <img
                            src={`${ENV.SERVER_HOST}${screenshot.attributes.url}`}
                            className={styles.carouselImages}
                            onClick={() => setFocusedImage(`${ENV.SERVER_HOST}${screenshot.attributes.url}`)}
                        />
                    </div>
                ))}
            </div>
        </div>
  )
}

export { ImagesCarousel }