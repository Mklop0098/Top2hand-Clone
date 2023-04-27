import { Register } from './footerRegister'
import { MainFooter } from './mainFooter'
import { Footer as data} from '../../data'
import './style.css'

export const Footer = () => {
    return (
    <div className='footer'>
        <Register />
        <MainFooter props={data}/>
    </div>
    )
}