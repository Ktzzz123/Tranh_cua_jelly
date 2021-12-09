import React, {useState, useContext, useCallback} from 'react'
import { GlobalState } from '../../GlobalState';


//icon
import Menu from './icon/Menu.svg'
import Cart from './icon/shopping-cart-solid.svg'
import close from './icon/close.svg'

const Header = () => {
    const value = useContext(GlobalState)
    return (
        <Header>
            <div className=''>
                <img src={Menu} alt=''/>
            </div>
        </Header>
    )
}

export default Header
