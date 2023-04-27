import { Link } from 'react-router-dom'
import { Product } from '../../data'
import './style.css'

type BreadcrumbType = {
    name: string,
    link: string
}

type ProductBreadcrumbProps = {
    props: BreadcrumbType[]
}
export const Breadcrumb:React.FC<ProductBreadcrumbProps> = (props) => {

    const data = props.props

    return (
        <div className="product__breadcrumb">
            <div className='container'>
                <div className='breadcrumb'>
                    {
                        data.map((item, key) => (
                            <Link to={item.link}>{item.name} / &nbsp;</Link>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}