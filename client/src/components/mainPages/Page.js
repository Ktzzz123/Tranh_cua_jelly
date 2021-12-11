import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Products from './products/Products'
import DetailProduct from './products/detailProduct/DetailProduct'
import Login from './auth/Login'
import Register from './auth/Register'
import Cart from './cart/Cart'
import NotFound from './utilts/not_found/NotFound'
import Loading from './utilts/loading/loading'



const mainPage = () => {
    return (
        <Switch>
           <Route path = '/' exact component = {Products}/>
           <Route path = '/detail/:id' exact component = {DetailProduct}/>
           <Route path = '/login' exact component = {Login}/>
           <Route path = '/register' exact component = {Register}/>
           <Route path = '/cart' exact component = {Cart}/>

           <Route path = '/loading' exact component = {Loading}/>

           <Route path = '*' exact component = {NotFound}/>
        </Switch>
    )
}

export default mainPage
