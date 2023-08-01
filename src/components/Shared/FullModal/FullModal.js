import styles from './FullModal.module.scss'
import { ButtonClose } from '@/components/ButtonClose'
import classNames from 'classnames'
import { ImagesCarousel } from './ImagesCarousel/ImagesCarousel'

const FullModal = (props) => {

    const { children, show, setShow, screenshots, focusedImage, setFocusedImage } = props

    const onOpenClose = () => setShow( prevState => !prevState)
    
  return (
    <div className={classNames(styles.fullModal, {[styles.active]: show})}>
        <div className={styles.contentModal}>

            <ImagesCarousel
                screenshots={screenshots}
                focusedImage={focusedImage}
                setFocusedImage={setFocusedImage}
            />

            <div className={styles.btnClose} onClick={onOpenClose}>
                <ButtonClose/>
            </div>
        </div>
    </div>
  )
}

export { FullModal }