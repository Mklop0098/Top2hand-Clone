
import { useParams } from 'react-router-dom'
import {useEffect, useState} from 'react'
import './style.css'
import { Product as ProductDT, ProductData} from '../../data'
import { getProductById } from '../../api'
import { ProductBody } from './ProductBody'
import { ProductComment } from './ProductComment'
import { Breadcrumb } from '../../components/Breadcrumb'

export const Product = () => {
    const match = useParams<{ id: string }>();

    const [data, setData] = useState<ProductDT>()

    console.log(match.id)

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
          });
        const product = getProductById(match.id)
        setData(product.data)
    }, [match.id])

    const breadcrumb = [
        {
            name: 'Trang chủ',
            link: '/',
        },
        {
            name: 'Sản phẩm mới',
            link: '/',
        },
        {
            name: '[Size ' + data?.size + ']' + ' ' + data?.name,
            link: '/products/'+ data?.id,
        },
    ]

    return (
        <div>
            { data && 
                <div>
                    <Breadcrumb props={breadcrumb}/>
                    <ProductBody props={data} />
                    <ProductComment props={ProductData}/>
                </div>
            }
        </div>
    )
}