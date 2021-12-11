import React, {useContext, } from 'react'
import {GlobalState} from '../../../GlobalState'
import ProductItem from './ProductItem/ProductItem'


import useStyles from './styles'

function Products() {
    const classes = useStyles()
    const state = useContext(GlobalState)
    const [products]= state.productsAPI.products
    // console.log({products})
    return (
        // <div className={classes.products}>
        <div className="products">
           {
            products.map(product=>{
                   return <ProductItem key = {product._id} product = {product}/>
               })
           }
        </div>
    )
}

export default Products
 