
import { HomeBanner } from './HomeBanner'
import { HomeBlock } from './HomeBlock'
import { HomeProductList } from './HomeProductList'
import './style.css'


export const Home = () => {
    return (
        <div>
            <HomeBanner />
            <HomeProductList />
            <HomeBlock />
        </div>
    )
}