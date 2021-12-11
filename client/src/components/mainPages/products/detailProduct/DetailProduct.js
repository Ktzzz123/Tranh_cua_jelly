import React,{useState, useContext, useEffect} from 'react'
import {useParams, Link} from 'react-router-dom'
import {GlobalState} from '../../../../GlobalState'
import useStyles from './styles'
import ProductItem from '../ProductItem/ProductItem'

function DetailProduct() {
    const params = useParams()
    const state = useContext(GlobalState)
    const [products] = state.productsAPI.products
    const [detailProduct, setdetailProduct] = useState([])
    const classes = useStyles()


    useEffect(()=>{
        console.log('re render')
        if(params.id){
            products.forEach(product=>{
                if(product._id === params.id) setdetailProduct(product)
                // console.log(params)
            })
        }
    }, [params.id, products])
    // console.log(products)
    // console.log(params)
    // console.log({detailProduct})
    if(detailProduct.length===0) return null;
    return (
        <>

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
            <div className = {classes.fullImage}>
            <h2>Full Picture</h2>
            <img src={detailProduct.images.url} alt="" />
            </div>
            </div>
            
            <div>
                <h2>Related Products</h2>
                <div className={classes.product}>
                    {  products.map(product => {
                        return product.category === detailProduct.category 
                        ? <ProductItem className = {classes.product} key ={product._id} product = {product}/> :null
                    })
                    }
                </div>
            </div>
        </>
    )
}

export default DetailProduct
