import { Breadcrumb } from '../../components/Breadcrumb'
import { ProductComponent } from '../../components/Product'
import { ShoesLayout } from '../../components/ShoesLayout'
import { ProductData } from '../../data'

export const WomenShoes = () => {

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
            name: 'Giày nữ',
            link: '/collections/giay-nu'
        },
    ]

    return (
        <div>
            <Breadcrumb props={breadcrumb}/>
            <ShoesLayout title='Giày nữ'>
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