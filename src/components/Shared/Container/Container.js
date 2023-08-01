import styles from './Container.module.scss'

export function Container(props) {
    const { children } = props

    return( 

        <div className={styles.mainContainer}>
            <div className={styles.container}>
              {children}
            </div>
        </div>
    
    )
} 