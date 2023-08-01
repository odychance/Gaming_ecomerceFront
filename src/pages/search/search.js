import { BasicLayout } from "@/layouts"
import { Container, GridGames, NoResult, Pagination, Separator, Columns } from "@/components/Shared"
import { size } from "lodash"
import { useEffect } from "react"
import { Seo } from "@/components/Shared"

export default function SearchPage(props) {

    const { games, pagination, searchText } = props

    const hasResult = size(games) > 0
    
    useEffect(() => {
        document.getElementById("search-games").focus()
    }, [])

  return (
    <>

        <Seo title="Gaming - Buscando..." />

        <BasicLayout relative isOpenSearch>
            <Container>
                <Separator height={50} />
                    <Columns>
                        <h2>Buscando: {searchText}</h2>

                        {hasResult ? (
                            <>
                                <GridGames games={games} />
                                <Separator height={30} />
                                <Pagination currenPage={pagination.page} totalPages={pagination.pageCount}/>
                                <Separator height={100} />
                            </>
                        ): (
                            <>
                                <NoResult text="No se han encontrado resultados" />
                                <Separator height={100} />
                            </>
                        )}
                    </Columns>
            </Container>
        </BasicLayout>
    </>
  )
}