import { FC, lazy } from 'react'
import wait from '../utils/wait';


const LazyTest : FC = lazy(
    async () => {
        await wait(1500);
        return import("./Test")
    }
)

export default LazyTest