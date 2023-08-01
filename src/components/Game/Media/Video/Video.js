import styles from './Video.module.scss'
import ReactPlayer from 'react-player'


const Video = (props) => {
  // console.log(props)

  const { video } = props

  return (
    <div>
      <ReactPlayer url={video} className={styles.video} width="100%" height={634}/>
    </div>
  )
}

export { Video }