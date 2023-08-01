import { BasicLayout } from "@/layouts"
import { Info, Settings, Address, Wishlist, Orders } from "@/components/Account"
import styles from './account.module.scss'
import classNames from "classnames"
import { useState } from "react"
import { useAuth } from "@/hooks"
import { useRouter } from "next/router"
import { Separator } from "@/components/Shared"
import { Seo } from "@/components/Shared"

const accountPage = () => {

    const [showTabOrders, setShowTabOrders ] = useState(false)
    const [showTabWishlist, setShowTabWishlist ] = useState(false)
    const [showTabDirections, setShowTabDirections ] = useState(false)
    const [showTabSettings, setShowTabSettings ] = useState(false)

    const [reload, setReload] = useState(false)

    const { user, logout } = useAuth()
    const router = useRouter()
  
        if(!user) {
          router.push("/")
          return null
        }
    
    const toggleClassOrders = () => {
        setShowTabOrders(true)
        setShowTabWishlist(false)
        setShowTabDirections(false)
        setShowTabSettings(false)
    }

    const toggleClassWishlist = () => {
      setShowTabOrders(false)
      setShowTabWishlist(true)
      setShowTabDirections(false)
      setShowTabSettings(false)
  }

    const toggleClassDirections = () => {
      setShowTabOrders(false)
      setShowTabWishlist(false)
      setShowTabDirections(true)
      setShowTabSettings(false)
  }

    const toggleClassSettings = () => {
      setShowTabOrders(false)
      setShowTabWishlist(false)
      setShowTabDirections(false)
      setShowTabSettings(true)
  }

  const onReload = () => setReload((prevState) => !prevState)

  return (
    <> 

      <Seo title="Gaming - Mi cuenta" />
      <BasicLayout isContainer relative>
        <Info />
        
          <div className={styles.tabsMainContainer}>
            <div className={styles.upTabs}>

              <div className={styles.tabsLeft}>
                <h3 className={styles.txt} onClick={toggleClassOrders}>Mis pedidos</h3>
                <h3 className={styles.txt} onClick={toggleClassWishlist}>Lista de deseos</h3>
                <h3 className={styles.txt} onClick={toggleClassDirections}>Direcciones</h3>
              </div>

              <div className={styles.tabsRight}>
                <div className={styles.settings}> 
                  <img src="/svg/settings.svg" alt="settingsIcon" className={styles.settingsIcon} />
                  <h3 className={styles.txt} onClick={toggleClassSettings}>Ajustes</h3>
                </div>
                <a href="/" onClick={logout}>
                  <img src="/svg/logout.svg" alt="logout" className={styles.logoutIcon} />
                </a>
              </div>

            </div>

            <div className={styles.tabsBottom}>
              <div className={classNames(styles.tabsTxtBottom, { [styles.active]: showTabOrders})}>
                <Orders />
                <Separator height={80} />
              </div>
              <div className={classNames(styles.tabsTxtBottom, { [styles.active]: showTabWishlist})}>
                <Wishlist />
                <Separator height={40} />
              </div>

              <div className={classNames(styles.tabsTxtBottom, { [styles.active]: showTabDirections})}>
                <Address.AddAddress onReload={onReload}/>
                <Address.ListAddresses reload={reload} onReload={onReload} />
                <Separator height={80} />
              </div>
              <div className={classNames(styles.tabsTxtBottom, { [styles.active]: showTabSettings})}>
                <Settings.ChangeNameForm />

                <div className={styles.containerForms}>
                  <Settings.ChangeEmailForm />
                  <Settings.ChangePasswordForm />

                </div>
              </div>

              <Separator height={80} />

            </div>
          </div>
      </BasicLayout>
    </>
  )
}

export default accountPage