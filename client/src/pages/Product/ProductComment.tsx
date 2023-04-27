import { ProductComponent } from '../../components/Product'
import { Product } from '../../data'
import './style.css'

type ProductCommentProps = {
    props: Product[]
}

export const ProductComment:React.FC<ProductCommentProps> = (props) => {

    const data = props.props

    return (
        <div className='product-comment__container'>
            <span>Sản phẩm liên quan</span>
            <div className='product-comment container'>
                {
                    data.slice(0, 5).map((i, key) => (
                        <div key={key}>
                            <ProductComponent props={i}/>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}