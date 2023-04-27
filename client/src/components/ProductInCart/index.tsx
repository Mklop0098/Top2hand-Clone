import React from 'react'
import { Product } from '../../data'
import './style.css'
import { formatCurrency } from '../../ultil'
import { useCartContext } from '../../Context/Cart/cart.context'
import { removeProductFromCart } from '../../Context/Cart/cart.action'

type ProductinCartProps = {
    props: Product
}

export const ProductinCart:React.FC<ProductinCartProps> = (props) => {
    const data = props.props
    const {cartState, cartDispatch} = useCartContext()
    const handleClick = () => {
        cartDispatch(removeProductFromCart(data.id))
    }
    return (
        <div className='product-cart'>
            <img src={data.thumbnail[0]} alt="" />
            <div className='product-cart__detail'>
                <span>{'[Size ' + data.size + ']' + ' ' + data.name}</span>
                <div>
                    <span className='detail__quantity'>{data.quantity}</span>
                    <span>{data.quantity && formatCurrency(data.price * data.quantity)}</span>
                </div>
            </div>
            <div className='product-cart__delete'>
                <span onClick={handleClick}>x</span>
            </div>
        </div>
    )
}