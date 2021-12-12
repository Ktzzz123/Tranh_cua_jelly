import React, {useContext, useEffect} from 'react'
import {Switch, Route} from 'react-router-dom'
import Products from './products/Products'
import DetailProduct from './products/detailProduct/DetailProduct'
import Login from './auth/Login'
import Register from './auth/Register'
import Cart from './cart/Cart'
import NotFound from './utilts/not_found/NotFound'
import Loading from './utilts/loading/loading'

import { GlobalState } from '../../GlobalState';


function Page () {

    const state = useContext(GlobalState)
    const [isLogged] = state.userAPI.isLogged

 
    return (
        <Switch>
           <Route path = '/' exact component = {Products}/>
           <Route path = '/detail/:id' exact component = {DetailProduct}/>
           <Route path = '/login' exact component = {isLogged? NotFound: Login}/>
           <Route path = '/register' exact component = {isLogged? NotFound: Register}/>
           <Route path = '/cart' exact component = {Cart}/>

           <Route path = '/loading' exact component = {Loading}/>

           <Route path = '*' exact component = {NotFound}/>
        </Switch>
    )
}

export default Page
