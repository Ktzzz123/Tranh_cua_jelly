import React, {useState, useContext} from 'react'
import { GlobalState } from '../../GlobalState';
import { Link } from 'react-router-dom';
import useStyles from './styles'
import Axios from 'axios';

//icon
import Menu from './icon/Menu.svg'
import Cart from './icon/shopping-cart-solid.svg'
import close from './icon/close.svg'

function Header () {
    const classes = useStyles()
    const state = useContext(GlobalState);
    const [isLogged] = state.userAPI.isLogged
    const [isAdmin] = state.userAPI.isAdmin
    console.log(state)
    const logoutUser = async () =>{
        await Axios.get('/user/logout')
        
        localStorage.removeItem('firstLogin')
        
        window.location.href = "/";
    }

    const adminRouter = () =>{
        return(
            <>
                <li><Link to="/create_product">Create Product</Link></li>
                <li><Link to="/category">Categories</Link></li>
                {console.log( [isAdmin])}
            </>
        )
    }

    const loggedRouter = () =>{
        return(
            < >
                <li className={classes.navbarItem_item}><Link to="/history">History</Link></li>
                <li className={classes.navbarItem_item}><Link to="/" onClick={logoutUser}>Logout</Link></li>
                {/* {console.log( [isLogged, setIsLogged])} */}

            </>
        )
    }


    return (
        <header className={classes.container}>
            <div className={classes.menu}>
                <img src={Menu} alt='' width='30px'/>
            </div>
            <div className = {classes.logo}>
            <h1>
                    <Link to="/">{isAdmin ? 'Admin' : 'Jellys shop'}</Link>
                </h1>
            </div>
            <ul className = {classes.navbarItem}>
                <li className = {classes.navbarItem_item}><Link to='/'>{isAdmin? 'Product': 'Shop'}</Link></li>
            
                {isAdmin && adminRouter()}

                {
                    isLogged ? loggedRouter() : <li className = {classes.navbarItem_item}><Link to='/login'>Login/Register</Link></li>
                }
                <li className = {classes.navbarItem_item}>
                    <img src={close} alt="" width='30px'/>
                </li>
            </ul>
                {
                    isAdmin? '' :
                    <div className = {classes.cart_icon} color = "#fff">
                        <span className = {classes.cart_icon_span}>0</span>
                        <Link to = '/cart'>
                            <img src = {Cart} alt="giỏ hàng" width = '30' color = "#fff"/>
                        </Link>
                    </div>
                }
            
        </header>
    )
}

export default Header
