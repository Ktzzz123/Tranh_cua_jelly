import React, {useContext, } from 'react'
import {GlobalState} from '../../../GlobalState'
import Loading from '../utilts/loading/loading'
import ProductItem from './ProductItem/ProductItem'


// import useStyles from './styles'

function Products() {
    // const classes = useStyles()
    const state = useContext(GlobalState)
    const [products]= state.productsAPI.products
    const [isAdmin]=state.userAPI.isAdmin
    // console.log({products})
    return (
        <>
        
        <div className="products">
           {
            products.map(product=>{
                   return <ProductItem key = {product._id} product = {product}
                       isAdmin={isAdmin}
                   />
               })
           }
        </div>
        {products.length === 0 && <Loading/>}
        </>
    )
}

export default Products
 