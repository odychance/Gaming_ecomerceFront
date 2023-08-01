import styles from './Info.module.scss'
import { Container } from '@/components/Shared'

import React from 'react'

const Info = (props) => {

    const { game } = props

  return (
    <Container>
        <div className={styles.info}>
            <div className={styles.summary}>
                <p>{game.summary}</p>
            </div>

            <div className={styles.more}>
                <ul>
                    <li>
                        <span>Fecha de lanzamiento: </span>{game.releaseDate}
                    </li>
                </ul>
            </div>
        </div>
    </Container>
  )
}

export { Info }