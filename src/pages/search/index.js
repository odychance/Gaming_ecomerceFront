export { default } from './search.js'
import { Game } from '@/api/game.js'

export async function getServerSideProps(context) {

    const { query: { $, page = 1 } } = context

    const gameCtrl = new Game()
    
    const response = await gameCtrl.searchGames($, page)

    return {
        props: {
            games: response.data,
            pagination: response.meta.pagination,
            searchText: $,
        }
    }
}