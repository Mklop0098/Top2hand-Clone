import { Breadcrumb } from '../../components/Breadcrumb'
import { ProductComponent } from '../../components/Product'
import { ShoesLayout } from '../../components/ShoesLayout'
import { ProductData } from '../../data'
import './style.css'

export const MenShoes = () => {

    const breadcrumb = [
        {
            name: 'Trang chủ',
            link: '/'
        },
        {
            name: 'Danh mục',
            link: '#'
        },
        {
            name: 'Giày nam',
            link: '/collections/giay-nam'
        },
    ]

    return (
        <div>
            <Breadcrumb props={breadcrumb}/>
            <ShoesLayout title='Giày nam'>
                <div className='men-shose__products'>
                    {
                        ProductData.map((item, key) => (
                            <div key={key}>
                                <ProductComponent props={item}/>
                            </div>
                        ))
                    }
                </div>
            </ShoesLayout>
        </div>
    )
}