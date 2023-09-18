import { FC, Suspense } from 'react'
import LazyTest from './LazyTest'
import Loading from './Loading'

const ReactSuspense: FC = () => {
    return (
        <Suspense fallback={<Loading />}>
            <LazyTest />
        </Suspense>
    )
}

export default ReactSuspense