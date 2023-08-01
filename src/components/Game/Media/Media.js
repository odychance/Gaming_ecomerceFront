import { Container } from "@/components/Shared"
import { Separator } from "@/components/Shared"
import { Video } from "./Video"
import { Gallery } from "./Gallery"
import styles from './Media.module.scss'

const Media = (props) => {

    const { video, screenshots } = props

    return (
        <Container>
            <div className={styles.mainContainer}>
                <h2>Visuales</h2>

                <Separator height={30} />

                <Video video={video}/>

                <Separator height={30} />

                <Gallery screenshots={screenshots}/>

            </div>
        </Container>
        )
}

export { Media }