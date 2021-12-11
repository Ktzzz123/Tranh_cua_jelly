import React from 'react'
import {Link} from 'react-router-dom'

import useStyles from './styles'


function ProductItem({product}) {
    const classes = useStyles()
    return (
        <div className = {classes.product_card}>
            <img className = {classes.image} src={product.images.url} alt="" />
            <div className={classes.product_infor}>
                <h2  title={product.title }>{product.title}</h2>
                <span>${product.price}</span>
                <p>{product.description}</p>
            </div>
            <div className={classes.row_btn}>
                <Link id="btn_buy" to='#!'>Buy</Link>
                <Link id="btn_view" to={`detail/${product._id}`}>View</Link>
            </div>
         
    
        </div>
    )
}

export default ProductItem
