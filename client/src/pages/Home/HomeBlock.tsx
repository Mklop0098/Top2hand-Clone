import { BlockCatalog } from '../../components/BlockCatalog'
import { Block as data} from '../../data'
import './style.css'

export const HomeBlock = () => {
    return (
        <div className='homeblock'>
            {
                data.map((item, key) => (
                    <div>
                        <BlockCatalog props={item} />
                    </div>
                ))
            }
        </div>
    )
}