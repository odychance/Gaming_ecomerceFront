import styles from './BarTrust.module.scss'
import { Container } from '../Container'
import { map } from 'lodash'
import { data } from './BarTrust.data'

const BarTrust = () => {
  return (
    <div className={styles.barTrust}>
        <Container>

            <div className={styles.content}>
                {map(data, (item) => (
                    <div className={styles.block} key={item.key}>
                        <img src={item.icon} alt='icono' className={styles.icon}/>

                        <div className={styles.text}>
                            <h5>{item.title}</h5>
                            <span>{item.description}</span>
                        </div>
                    </div>
                ))}
            </div>
        </Container>
    </div>
  )
}

export { BarTrust }