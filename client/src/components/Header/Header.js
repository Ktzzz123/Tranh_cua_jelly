import React, {useState, useContext, useCallback} from 'react'
import { GlobalState } from '../../GlobalState';
import { Link } from 'react-router-dom';
import useStyles from './styles'

//icon
import Menu from './icon/Menu.svg'
import Cart from './icon/shopping-cart-solid.svg'
import close from './icon/close.svg'

const Header = () => {
    const value = useContext(GlobalState);
    const classes = useStyles()
    return (
        <header className={classes.container}>
            <div className={classes.menu}>
                <img src={Menu} alt='' width='30px'/>
            </div>
            <div className = {classes.logo}>
                <h1>
                    <Link to ='/'>JELLY's Website</Link>
                </h1>
            </div>
            <ul className = {classes.navbarItem}>
                <li className = {classes.navbarItem_item}><Link to='/'>Sản Phẩm</Link></li>
                <li className = {classes.navbarItem_item}><Link to='/login'>Đăng nhập/Đăng ký</Link></li>
                <li className = {classes.navbarItem_item}>
                    <img src={close} alt="" width='30px'/>
                </li>
            </ul>
            <div className = {classes.cart_icon} color = "#fff">
                <span className = {classes.cart_icon_span}>0</span>
                <Link to = '/cart'>
                    <img src = {Cart} alt="giỏ hàng" width = '30' color = "#fff"/>
                </Link>
            </div>
            
        </header>
    )
}

export default Header
