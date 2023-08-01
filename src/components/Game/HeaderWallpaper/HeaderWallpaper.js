import React from 'react'
import styles from './HeaderWallpaper.module.scss'

const HeaderWallpaper = (props) => {
    const { image } = props
    // console.log(image)

  return (
    <div className={styles.headerWallpaper}>
        <img src={image} alt="image wallpaper"/>
    </div>
  )
}

export { HeaderWallpaper }