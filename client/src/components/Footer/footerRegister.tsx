import './style.css'
import {GoMailRead} from 'react-icons/go'
import {FaPhoneSquareAlt} from 'react-icons/fa'

export const Register = () => {
    return (
    <div className='register container'>

            <div className='register__mail'>
                <GoMailRead size={22}/>
                <span>Đăng ký nhận tin</span>
            </div>
            <div className='register__input'>
                <input type="text" placeholder='Nhập email của bạn'/>
                <button>Đăng ký</button>
            </div>
            <div className='register__support'>
                <FaPhoneSquareAlt size={22}/>
                <span>Hỗ trợ / Mua hàng: 0941835369</span>
            </div>

    </div>
    )
}