import React,{useState, useContext, useEffect} from 'react'
import {useParams, Link} from 'react-router-dom'
import {GlobalState} from '../../../../GlobalState'
import useStyles from './styles'
function DetailProduct() {
    const params = useParams()
    const state = useContext(GlobalState)
    const [products] = state.productsAPI.products
    const [detailProduct, setdetailProduct] = useState([])
    const classes = useStyles()


    useEffect(()=>{
        if(params){
            products.forEach(product=>{
                if(product._id === params.id) setdetailProduct(product)
                console.log(params)
            })
        }
    }, [params, products])
    // console.log(products)
    // console.log(params)
    console.log({detailProduct})
    if(detailProduct.length===0) return null;
    return (
        <div className={classes.Container}>
            <img className={classes.images} src={detailProduct.images.url} alt = "" />
            <div className = {classes.box_detail}>
                <div className = {classes.row}>
                    <h2>{detailProduct.title}</h2>
                    <h6>ID: {detailProduct.product_id}</h6>
                </div>
                <span>$ {detailProduct.price}</span>
                <p>{detailProduct.description}</p>
                <p>{detailProduct.content}</p>
                <p>sold: {detailProduct.sold}</p>
                <Link to='/cart' className = {classes.cart}>Buy Now</Link>
            </div>
        </div>
    )
}

export default DetailProduct
