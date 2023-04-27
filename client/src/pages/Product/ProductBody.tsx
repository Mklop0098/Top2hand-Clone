import { type } from 'os'
import './style.css'
import { Product } from '../../data'
import { useState } from 'react'
import { formatCurrency } from '../../ultil'
import { useCartContext } from '../../Context/Cart/cart.context'
import { setProductToCart } from '../../Context/Cart/cart.action'

type ProductBodyProps = {
    props: Product
}

export const ProductBody:React.FC<ProductBodyProps> = (props) => {
    const data = props.props

    const [currentIng, setCurrentImg] = useState(data.thumbnail[0])
    const [quantity, setQuantity] = useState(1)

    const {cartState, cartDispatch} = useCartContext();

    const handleChangeImg = (item: string) => {
        setCurrentImg(item)
    }

    const reduceQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    const handleAddToCart = () => {
        cartDispatch(setProductToCart(data, quantity))
    }

    console.log(cartState)

    return (
        <div className='product__body container'>
            <div className='body__left'>
                <div className='thumbnail__list'>
                    {
                        data.thumbnail.map((item, key) => (
                            <img src={item} alt="" key={key} onClick={() => handleChangeImg(item)}/>
                        ))
                    }
                </div>
                <div className='thumbnail__main'>
                    <img src={currentIng} alt="" />
                </div>
            </div>
            <div className='body__right'>
                <span className='right__title'>
                    {'[Size ' + data.size + ']' + ' ' + data.name}
                </span>
                <span className='right__brand'>{data.brand}</span>
                <span className='right__price'>{formatCurrency(data.price * quantity)}</span>
                <div className='right__quantity'>
                    <button onClick={reduceQuantity}>-</button>
                    <span>{quantity}</span>
                    <button onClick={() => setQuantity(quantity + 1)}>+</button>
                </div>
                <button className='right__btn' onClick={handleAddToCart}><span>Thêm vào giỏ</span></button>
                <div className='right__description'>
                    <span>Mô tả</span>
                    <ul>
                        <li><span>Tên sản phẩm:</span> {data.name}</li>
                        <li><span>Condition:</span> {data.condition}</li>
                        <li><span>Size:</span> {data.size}</li>
                        {
                            data.warn.map((i, key) => (
                                <li key={key}>{i}</li>
                            ))
                        }
                    </ul>
                </div>  
            </div>

        </div>
    )
}