import { BlockItem } from '../../data'
import './style.css'

type BlockCatalogProps = {
    props: BlockItem
}

export const BlockCatalog:React.FC<BlockCatalogProps> = (props) => {

    const data = props.props

    return (
        <div className='block-container'>
            <div className='blockcatalog'
                style={{backgroundImage: `url(${data.thumbnail}`}}
            >
            </div>
            <div className='blockcatalog__content'>
                <span className='content__desc'>
                    {data.desc}
                </span>
                <span className='content__title'>
                    {data.title}
                </span>
                <button className='content__btn'>
                    <span>Xem thêm</span>
                </button>
            </div>
        </div>
    )
}