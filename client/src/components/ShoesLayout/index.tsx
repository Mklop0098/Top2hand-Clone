import { ReactNode, useEffect, useState } from 'react'
import './style.css'
import { AllBrand, AllSizeMen, Product } from '../../data'
import { ProductData } from '../../data'

type ShoesLayoutProps = {
    children: ReactNode,
    title: string,

}

export const ShoesLayout:React.FC<ShoesLayoutProps> = (props) => {

    const [checkedBoxes, setCheckedBoxes] = useState<string[]>([]);
    const [data, setData] = useState<Product[]>([])



    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        const isChecked = e.target.checked;

        if (isChecked) {
          setCheckedBoxes([...checkedBoxes, value]);
        } else {
          setCheckedBoxes(checkedBoxes.filter((box) => box !== value));
        }
      };

    
    useEffect(() => {
        let dt: Product[] = [];
        let rs: Product[] = ProductData
        let result: Product[] = []
        checkedBoxes.forEach(i => {
            dt = rs.filter(item => (item.brand === i))
            dt.forEach(d => (
                result.push(d)
            ))
        })

        setData(result)


    }, [checkedBoxes])


    return (
        <div className='shoes-layout container'>
            <div className='layout__left'>
                <div className='layout__left-sticky'>
                    <div className='left__content-f'>
                        <span>Thương hiệu</span>
                        <div className='f__content'>
                            {
                                AllBrand.map((item, key) => (
                                    <div className="content__checkbox" key={key}>
                                        <input type="checkbox" onChange={(e) => handleChange(e)} value={item}/>
                                        <span>{item}</span>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className='left__content-s'>
                        <span>Kích thước</span>
                        <div className='s__content'>
                            {
                                AllSizeMen.map((item, key) => (
                                    <div className='content-box' key={key}>
                                        {item}
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className='layout__right'>
                <div className='right__header'>
                    <div className='right__header-title'>
                        {props.title}
                    </div>
                    <div className='right__header-filter'>
                        <select name="" id="">
                            <option value="">Sản phẩm nổi bất</option>
                            <option value="">Giá tăng dần</option>
                            <option value="">Giá giảm dần</option>
                            <option value="">Tên A - Z</option>
                            <option value="">Tên Z - A</option>
                            <option value="">Cũ nhất</option>
                            <option value="">Mới nhất</option>
                            <option value="">Bán chạy nhất</option>
                        </select>
                    </div>
                </div>
                <div className='right__content'>
                    {props.children}
                </div>
            </div>
        </div>
    )
}