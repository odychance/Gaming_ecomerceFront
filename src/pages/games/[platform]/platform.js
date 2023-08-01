import { Container, GridGames, Separator, NoResult, Pagination } from "@/components/Shared"
import { size } from "lodash"
import { BasicLayout } from "@/layouts"
import styles from './platform.module.scss'
import { Seo } from "@/components/Shared"

const PlatformPage = (props) => {

  const { games, platform, pagination } = props
  const hasProducts = size(games) > 0;


  // console.log(pagination);

  return (
    <>
      <Seo title={`Gaming - Juegos de ${platform.attributes.title}`} />

      <BasicLayout relative>
        <Separator height={50} />
        
        <Container>

          <div className={styles.containerResults}>
            <h2 className={styles.title}>{platform.attributes.title}</h2>

            { hasProducts ? (
              <>
                <GridGames games={games} />
                <Separator height={30} />
                <Pagination totalPages={pagination.pageCount} currentPage={pagination.page} />
              </>
            ) : (
              <NoResult text={`La categoria ${platform.attributes.title} aún no tiene productos`} />
            )}
          </div>

        </Container>

        <Separator height={100} />
              
      </BasicLayout>
    </>
  )
}

export default PlatformPage