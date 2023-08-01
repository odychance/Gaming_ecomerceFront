import styles from './Menu.module.scss'
import { useState, useEffect } from 'react'
import { Platform } from '@/api'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { map } from 'lodash'
import classNames from 'classnames'
import { ENV } from '@/utils/constants'

const platformCtrl = new Platform()

const Menu = (props) => {

    const { isOpenSearch } = props
    const [ platforms, setPlatforms ] = useState(null)
    const [ showSearch, setShowSearch ] = useState(isOpenSearch)
    const [ searchText, setSearchText] = useState('')

    const router = useRouter()

    const openCloseSearch = () => setShowSearch( (prevState) => !prevState )

    const { SERVER_HOST } = ENV

    useEffect(() => {
        (   async () => {try {
                const response = await platformCtrl.getAll()
                setPlatforms(response.data)
            
            } catch (error) {
                console.error(error)
            }
        })()
    }, [])

    useEffect(() => {
        setSearchText(router.query.$ || '')
    }, [])

    const onSearch = (text) => {
        setSearchText(text)
        router.replace(`/search?$=${text}`)
    }
    
  return (
    <div className={styles.plataforms}>
        {map(platforms, (platform) => (
            <Link key={platform.id} href={`/games/${platform.attributes.slug}`}>
                <img src={`${SERVER_HOST}${platform.attributes.icon.data.attributes.url}`} className={styles.icons}/>
                {platform.attributes.title}
            </Link>
        ))}

        <button className={styles.search} onClick={openCloseSearch}>
            <img src='/svg/search.svg' alt='search' className={styles.searchIcon}  />
        </button>

        <div className={classNames(styles.inputContainer, { [styles.active]: showSearch })}>
            <input id="search-games" className={styles.input} placeholder='Buscador' focus="true" value={searchText} onChange={(data) => onSearch(data.target.value)} />
            <img src='/svg/close.svg' className={styles.closeInput} onClick={openCloseSearch} />
        </div>
    </div>
  )
}

export { Menu }