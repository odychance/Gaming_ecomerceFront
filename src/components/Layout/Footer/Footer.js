import React from 'react'
import Link from 'next/link'
import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <div className={styles.footer}>
        <div className={styles.container}>
            <div className={styles.columns}>
                <div>
                    <Link href="/">
                        <img src="/images/logo.png" alt="gaming" className={styles.logo} />
                    </Link>
                </div>

                <div >
                    <ul>
                        <Link href='#'>Terminos y Condiciones</Link>
                        <Link href='#'>Politica de Privacidad</Link>
                        <Link href='#'>Contacto</Link>
                        <Link href='#'>FAQs</Link>
                    </ul>
                </div>

                <div className={styles.social}>
                    <button as="a" href="#">
                        <img src="/images/facebook.png" alt="facebook icon" className={styles.fbIcon}/>
                    </button>
                    <button as="a" href="#">
                        <img src="/images/instagram.png" alt="instagram icon" className={styles.igIcon}/>
                    </button>
                    <button as="a" href="#">
                        <img src="/images/linkedin.png" alt="linkedin icon" className={styles.liIcon}/>
                    </button>
                    <button as="a" href="#">
                        <img src="/images/gmail.png" alt="gmail icon" className={styles.gmIcon}/>
                    </button>

                </div>
            </div>

            <div className={styles.copyright}>
                <span>Copyright © 2023 Gaming - All rights reserved</span>
            </div>
        </div>
    </div>
  )
}

export { Footer }