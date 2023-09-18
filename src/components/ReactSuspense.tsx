import { FC, Suspense } from 'react'
import LazyTest from '@components/LazyTest'
import Loading from '@components/Loading'

const ReactSuspense: FC = () => {
    return (
        <Suspense fallback={<Loading />}>
            <LazyTest />
        </Suspense>
    )
}

export default ReactSuspense