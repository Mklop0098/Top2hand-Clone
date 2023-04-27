import { ProductComponent } from '../../components/Product'
import { ProductData } from '../../data'
import './style.css'

export const HomeProductList = () => {
    return (
        <div className='homeproduct container'>
            <span>Sản phẩm mới</span>
            <div className='product__list'>
                {
                    ProductData.map((item, key) => (
                        <div key={key}>
                            <ProductComponent props={item}/>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}