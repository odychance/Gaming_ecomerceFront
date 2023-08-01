import React from 'react'
import classNames from 'classnames'
import styles from './BasicModule.module.scss'
import { TopBar, Footer } from '@/components/Layout'

const BasicLayout = (props) => {

    const {
        children,
        isOpenSearch = false,
        isContainer = false,
        relative = false
    } = props

  return (
    <>

        <TopBar isOpenSearch={isOpenSearch}/>

        <div className={styles.mainContainer}>
            <div className={classNames({ [styles.relative]: relative })}>
                {isContainer ? (
                    <div className={styles.reducedContaier}>
                        {children}
                    </div>
                ) : (
                    <div>
                        {children}
                    </div> 
                ) }  
            </div>
        </div>

        <Footer />
    </>
  )
}

export { BasicLayout }