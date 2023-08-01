import styles from './BannerAdd.module.scss'
import { Button } from '@/components/Button'
import { Container } from '../Container'
import Link from 'next/link'

const BannerAdd = (props) => {

    const { title, subtitle, btnTitle, btnLink, image } = props
    // console.log(btnLink)
  return (
    <div className={styles.container}>
        <Container>
            <div className={styles.containerImage}>
                <img src={image} alt="bannerAdd img"/>
            </div>
        </Container>

        <div className={styles.infoContainer}>
            <Container>
                <div className={styles.info}>
                    <h1>{title}</h1>
                    <h3>{subtitle}</h3>

                    <Link href={btnLink}>
                        <Button>{btnTitle}</Button>
                    </Link>
                </div>
            </Container>
        </div>  
    </div>
  )
}

export { BannerAdd }