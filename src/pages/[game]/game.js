import React from 'react'
import { BasicLayout } from '@/layouts'
import { Game } from '@/components/Game'
import { ENV } from '@/utils/constants'
import { Separator } from '@/components/Shared'
import { Seo } from '@/components/Shared'

const game = (props) => {
    const {game} = props
    const wallpaper = game.attributes.wallpaper

    // console.log(game.attributes)


  return (
    <>

        <Seo title={`Gaming - ${game.attributes.title}`} description={game.attributes.summary} />

        <BasicLayout>
            <Game.HeaderWallpaper
                image={`${ENV.SERVER_HOST}${wallpaper.data.attributes.url}`}
            />

            <Game.Panel gameId={game.id} game={game.attributes} />

            <Separator height={50} />

            <Game.Info game={game.attributes} />

            <Separator height={30} />

            <Game.Media video={game.attributes.video} screenshots={game.attributes.screenshots.data}/>

            <Separator height={50} />
        </BasicLayout>
    </>
  )
}

export default game