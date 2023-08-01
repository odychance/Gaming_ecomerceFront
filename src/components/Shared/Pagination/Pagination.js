import styles from './Pagination.module.scss'
import { useRouter } from 'next/router'
import { Pagination as PaginationUI } from 'semantic-ui-react'

const Pagination = (props) => {
    
    const { totalPages, currentPage } = props
    const router = useRouter()

    const onPageChange = (_, data) => {
        const { activePage } = data
        router.replace({ query: { ...router.query, page: activePage }})
    }
    
  return (
    <div className={styles.container}>
        <PaginationUI
            defaultActivePage={currentPage}
            totalPages={totalPages}
            ellipsisItem={null}
            firstItem={null}
            lastItem={null}
            onPageChange={onPageChange}
        />
    </div>
  )
}

export { Pagination }