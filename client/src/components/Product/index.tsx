import { useRef, useState } from 'react'
import { Product } from '../../data'
import { formatCurrency } from '../../ultil'
import './style.css'
import { Link } from 'react-router-dom'

type ProductProps = {
    props: Product
}

export const ProductComponent:React.FC<ProductProps> = (props) => {
    const data = props.props

    const hoverRef = useRef<any>()


    const handleEnter = () => {
        hoverRef.current.classList.add('hide')
    }

    const handleLeave = () => {
        hoverRef.current.classList.remove('hide')

    }

    return (
        <Link to={`/products/${data.id}`}>
            <a href={`/products/${data.id}`} className='product-component'>
                <div className='product-component__thumbnail' onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
                    <img src={data.thumbnail[0]} alt="picture" className='thumbnail-hover' ref={hoverRef}/>
                    <img src={data.thumbnail[1]} alt="picture" className='thumbnail-first'/>
                </div>
                <span className='product-component__name'>
                    {'[Size ' + data.size + ']' + ' ' + data.name}
                </span>
                <span className='product-component__price'>
                    {
                        formatCurrency(data.price)
                    }
                </span>
            </a> 
        </Link>

    )
}