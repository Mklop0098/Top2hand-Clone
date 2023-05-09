import './style.css'
import {BiSearch} from 'react-icons/bi'
import {HiUserCircle} from 'react-icons/hi'
import {BsBag} from 'react-icons/bs'
import {BiChevronDown} from 'react-icons/bi'
import logo from '../../assets/img/logo.webp'
import { useCartContext } from '../../Context/Cart/cart.context'
import { formatCurrency, totalPrice } from '../../ultil'
import { ProductinCart } from '../ProductInCart'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import { HeaderLogin } from './LoginForm'

export const Header = () => {

    const {cartState} = useCartContext()
    const [isDrop, setIsDrop] = useState(false)
    const [isLoginDrop, setIsLoginDrop] = useState(false)


    const navigator = useNavigate()


    const handleNavigate = () => {
        navigator('/your-cart')
    }

    const cartRef = useRef<any>()
    const wrapperRef = useRef<any>()
    const wrapperLoginRef = useRef<any>()
    const loginRef = useRef<any>()


    const handleClick = () => {
        if (isDrop) {
            cartRef.current.classList.add('hidden')
            setIsDrop(false)
        }
        else {
            cartRef.current.classList.remove('hidden')
            setIsDrop(true)
        }
    }

    const handleLoginClick = () => {
        if (isLoginDrop) {
            loginRef.current.classList.add('hidden')
            setIsLoginDrop(false)
        }
        else {
            loginRef.current.classList.remove('hidden')
            setIsLoginDrop(true)
        }
        
    }

    const handleChange = () => {
        cartRef.current.classList.add('hidden')
        setIsDrop(false)
    }

    useEffect(() => {
        const handleClickWrap = (e: MouseEvent) => {
            const target= e.target
            if (!wrapperRef.current.contains(target)) {
                cartRef.current.classList.add('hidden')
                setIsDrop(false)
            }

        }
        const handleClickLoginWrap = (e: MouseEvent) => {
            const target= e.target
            if (!wrapperLoginRef.current.contains(target)) {
                loginRef.current.classList.add('hidden')
                setIsLoginDrop(false)
            }
        }

        document.addEventListener('click', (e) => handleClickWrap(e));
        document.addEventListener('click', (e) => handleClickLoginWrap(e));
        
        return () => {
            document.removeEventListener('click',(e) => handleClickWrap(e));
            document.removeEventListener('click',(e) => handleClickLoginWrap(e));
            
        }
    })



    return (
        <div className="header container">
            <div className='header__logo'>
                <Link to={'/'}><img src={logo} alt="logo" /></Link>
            </div>
            <div className='header__search'>
                <input type="text" placeholder='Tìm kiếm sản phẩm...'/>
                <button><BiSearch size={18}/></button>
            </div>
            <div className='header__user' ref={wrapperLoginRef}>
                <HiUserCircle size={28}/>
                <div className='user__text'>
                    <span onClick={handleLoginClick}>Đăng nhập / Đăng kí</span>
                    <span>Tài khoản của tôi <BiChevronDown/></span> 
                </div>
                <div className='user__login hidden' ref={loginRef}>
                    <HeaderLogin />
                </div>
            </div>
            <div className='header__cart' ref={wrapperRef}>
                <div className='cart__holder'>
                    <BsBag size={24}/>
                    <span >{cartState.products.length}</span>
                </div>
                <span onClick={handleClick}>Giỏ hàng</span>
                <div className='cart__dropdown hidden' ref={cartRef}>
                    <div className='dropdown__header'>
                        <span >Giỏ hàng</span>
                    </div>
                    <div className='dropdown__body'>
                        {
                            cartState.products.length === 0 ?
                                <span>Hiện chưa có sản phẩm</span>:
                                <div className='body__list'>
                                    {cartState.products.map((i, key) => (
                                        <ProductinCart props={i}/>
                                    ))}
                                </div>
                        }
                    </div>
                    <div className='dropdown__price'>
                        <span>Tổng tiền</span>
                        <span className='price'>{formatCurrency(totalPrice(cartState))}</span>
                    </div>
                    <div className='dropdown__handle' onClick={handleChange}>
                        <button onClick={handleNavigate} className='button-container'><span>Xem giỏ hàng</span></button>
                        <button className='button-container'><span>Thanh toán</span></button>
                    </div>
                </div>
            </div>
        </div>
    )
}