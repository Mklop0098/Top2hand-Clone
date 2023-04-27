import { Fragment } from 'react'
import { MainFooter as Footer} from '../../data'
import './style.css'
import img from '../../assets/img/footer.jpg'

type MainFooterProps = {
    props: Footer[]
}

export const MainFooter:React.FC<MainFooterProps> = (props) => {
    const data = props.props

    return (
        <div style={{backgroundColor: 'white', padding: '40px 0'}}>
            <div className='main-footer container'>
                {
                    data.map((item, key) => {
                        return (
                            <div className='main-footer__item' key={key}>
                                <span className='item__title'>{item.title}</span>
                                {
                                    item.content.map((i, k) => {
                                        let Page
                                        if (i.icon) Page = i.icon
                                        else Page = Fragment
                                        return (
                                            <div key={k}>
                                               {i.icon && <div><Page/></div>}
                                               <span>{i.desc}</span>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        )
                    })
                }
                <div className='main-footer__contact'
                    style={{backgroundImage: `url(${img})`}}
                >
                
                </div>
            </div>
        </div>
    )
}