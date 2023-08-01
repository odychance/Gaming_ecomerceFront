import React from 'react'
import { BasicLayout } from '@/layouts'
import { Home } from '@/components/Home'
import { Separator, Container, BarTrust, BannerAdd, Seo } from '@/components/Shared'

const platformId = {
  playstation: 1,
  nintendo: 2,
  pc: 3,
  xbox: 4
}

const HomePage = () => {

  return (
    <>

      <Seo />

      <BasicLayout>
        <Home.BannerLastGamePublished />

        <Separator height={100} />

        <Container>
          <Home.LatestGame title="Ultimos lanzamientos" />
        </Container>

        <Separator height={100}/>

        <BarTrust />

        <Separator height={100}/>

        <Container>
          <Home.LatestGame title="PlayStation" limit={3} platformId={platformId.playstation}/>
        </Container>

        <Separator height={100}/>

        <BannerAdd
          title="Registrate y obten los mejores precios"
          subtitle="¡Compara con otros juegos y elige el tuyo!"
          btnTitle="Entrar ahora"
          btnLink="/account"
          image="/images/BannerAdd.png"
        />

        <Separator height={50} />

        <Container>
          <Home.LatestGame title="PC" limit={3} platformId={platformId.pc}/>
        </Container>

        <Separator height={100}/>

      </BasicLayout>
    </>
  )
}

export default HomePage