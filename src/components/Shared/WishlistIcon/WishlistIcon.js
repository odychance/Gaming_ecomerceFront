import styles from './WishlistIcon.module.scss'
import classNames from 'classnames'
import { Wishlist } from '@/api'
import { useState, useEffect } from 'react'
import { useAuth  } from '@/hooks'
import { add, has, remove } from 'lodash'

const wishlistCtrl = new Wishlist()

const WishlistIcon = (props) => {

    const [ hasWishlist, setHasWishlist ] = useState(null)
    const { gameId, className, removeCallback } = props
    const { user } = useAuth()
    
    useEffect(() => {
      ( async () => {
        try {
          const response = await wishlistCtrl.check(user.id, gameId)
          setHasWishlist(response)
        } catch (error) {
          setHasWishlist(false)
          console.error(error)
        }
      })()
    }, [gameId])

    const addWishlist = async () => {
      const response = await wishlistCtrl.add(user.id, gameId)
      setHasWishlist(response)
    }

    const deleteWishlist = async () => {
      try {
          await wishlistCtrl.delete(hasWishlist.id)
          setHasWishlist(false)

          if(removeCallback) {
            removeCallback()
          }
          
      } catch (error) {
          console.error(error)
      }
    }

    if(hasWishlist === null) return null
    
  return (
    <div onClick={hasWishlist ? deleteWishlist : addWishlist}>
      {hasWishlist ? (
        <img 
            src="/svg/heart.svg"
            className={classNames(styles.wishlistIcon, {
                [className] : className,
        })}/>
      ) : (
        <img 
            src="/svg/heartOutline.svg"
            className={classNames(styles.wishlistIcon, {
                [className] : className,
        })}/>
      )}
    </div>
  )
}

export { WishlistIcon }
