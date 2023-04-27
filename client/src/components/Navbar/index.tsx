import './style.css'
import { NavbarItem as navbar } from '../../data'
import {BiChevronDown} from 'react-icons/bi'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <div className='navbar container'>
            {
                navbar.map((item, key) => (
                    <div key={key} className={`${item.item ? 'navbar__item-drop' : 'navbar__item' }`}>
                        {item.link && <Link to={item.link}><a href={item.link}>{item.title}</a> {item.item && <BiChevronDown />}</Link>}

                        {
                            item.item && <div className='item__list'>
                                {
                                    item.item.map((i, key) => (
                                        <div key={key}>
                                            {i}
                                        </div>
                                    ))
                                }
                            </div>
                        }
                    </div>
                ))
            }
        </div>
    )
}