import React from 'react'
import {Link} from 'react-router-dom'
import BtnRender from './btnRender'
import Axios from 'axios'
import useStyles from './styles'


function ProductItem({product, isAdmin, deleteProduct}) {
    


    const classes = useStyles()
    return (

        <div className = {classes.product_card}>
        
            <img className = {classes.image} src={product.images.url} alt="" />
            <div className={classes.product_infor}>
                <h2  title={product.title }>{product.title}</h2>
                <span>{product.price} VND</span>
                <p>{product.description}</p>
            </div>
            
            <BtnRender product = {product} deleteProduct={deleteProduct} />
         
    
        </div>
    )
}

export default ProductItem
