
import { useCartContext } from '../../Context/Cart/cart.context'
import { Breadcrumb } from '../../components/Breadcrumb'
import './style.css'
import { formatCurrency, totalPrice } from '../../ultil'
import { changeProductQuantity, removeProductFromCart } from '../../Context/Cart/cart.action'
import { useState } from 'react'

export const Payment = () => {

    const [quantity, setQuantity] = useState(1)
    
    const breadcrumb = [
        {
            name: 'Trang chủ',
            link: '/',
        },
        {
            name: 'Giỏ hàng',
            link: '/your-cart',
        },
    ]

    const {cartState, cartDispatch} = useCartContext()
    const handleClick = (id: string) => {
        cartDispatch(removeProductFromCart(id))
    }

    const handlePlus = (id: string) => {
        cartDispatch(changeProductQuantity(quantity + 1, id))
        setQuantity(quantity + 1)


    }

    const handleSub = (id: string) => {
        if (quantity > 1) {
            cartDispatch(changeProductQuantity(quantity - 1, id))
            setQuantity(quantity - 1)
        }


    }

    return (
        <div className='your-cart'>
            <Breadcrumb props={breadcrumb} />
            <div className='cart__body container'>
                <div className='body__header'>
                    <h3>Giỏ hàng của bạn</h3>
                    <span>Có {`${cartState.products.length}`} sản phẩm trong giỏ hàng</span>
                </div>
                <div className='body__content'>
                    <div className='content__list'>
                        {
                            cartState.products.length < 1 ? <span>Giỏ hàng của bạn đang trống</span> :
                            <div className='list-products'>
                                {cartState.products.map((i, key) => (
                                    <div className='product-item'>
                                        <img src={i.thumbnail[0]} alt="" />
                                        <div>
                                            <div>
                                                <span>{'[Size ' + i.size + ']' + ' ' + i.name}</span>
                                                <span style={{color: "red", fontSize: '18px', fontWeight: '500'}} onClick={() => handleClick(i.id)}>x</span>
                                            </div>
                                            <div>
                                                <div>
                                                    <span>{formatCurrency(i.price)}</span>
                                                    <div className='item-quantity'>
                                                        <button  onClick={() => handleSub(i.id)}>-</button>
                                                        <span>{quantity}</span>
                                                        <button onClick={() => handlePlus(i.id)}>+</button>
                                                    </div>

                                                </div>
                                                <div style={{fontWeight:'700'}}>{i.quantity && formatCurrency(i.price * i.quantity)}</div>
                                            </div>
                                        </div>
                                    </div>
                                ))} 
                            </div>
                        }
                    </div>
                    <div className='content__bill'>
                        <h3>Thông tin đơn hàng</h3>
                        <div>
                            <span>Tổng tiền:</span>
                            <span>{formatCurrency(totalPrice(cartState))}</span>
                        </div>
                        <span>
                                Phí vận chuyển sẽ được tính ở trang thanh toán. <br/>
                                Bạn cũng có thể nhập mã giảm giá ở trang thanh toán.
                            </span>
                        <button>Thanh toán</button>
                        <span style={{color: 'blue'}}>Tiếp tục mua hàng</span>
                    </div>
                </div>
            </div>
        </div>
    )
}