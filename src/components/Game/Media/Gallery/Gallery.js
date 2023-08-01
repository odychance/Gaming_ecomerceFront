import styles from './Gallery.module.scss'
import { map } from 'lodash'
import { ENV } from '@/utils/constants'
import { FullModal } from '@/components/Shared'
import { useState } from 'react'

const Gallery = (props) => {
    
    const { screenshots } = props
    const [ show, setShow ] = useState(false)
    const [ focusedImage, setFocusedImage ] = useState('')


    const screenshotClone = [...screenshots]
    const principalImage = screenshotClone.shift()

    const onOpenClose = () => setShow( prevState => !prevState)

    const showPrincipalImage = () => setFocusedImage(`${ENV.SERVER_HOST}${principalImage.attributes.url}`)

    return (
    <>
        <div className={styles.gallery}>
            <div className={styles.principal} onClick={showPrincipalImage}>
                <img src={`${ENV.SERVER_HOST}${principalImage.attributes.url}`} width="100%" onClick={onOpenClose} />
            </div>

            <div className={styles.grid}>
                {map(screenshotClone, (screenshot) => (
                    <div key={screenshot.id} width="100%" onClick={() => setFocusedImage(`${ENV.SERVER_HOST}${screenshot.attributes.url}`)}>
                        <img src={`${ENV.SERVER_HOST}${screenshot.attributes.url}`} onClick={onOpenClose} width="100%" />
                    </div>
                ))}
            </div>
        </div>

        <FullModal focusedImage={focusedImage} setFocusedImage={setFocusedImage} show={show} setShow={setShow} screenshots={screenshots} />
    </>
  )
}

export { Gallery }