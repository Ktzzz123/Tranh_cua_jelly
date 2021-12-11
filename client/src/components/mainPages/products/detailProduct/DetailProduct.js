import React,{useState, useContext, useEffect} from 'react'
import {useParams, Link} from 'react-router-dom'
import {GlobalState} from '../../../../GlobalState'
function DetailProduct() {
    const params = useParams()
    const state = useContext(GlobalState)
    const [products] = state.productAPI.products
    const [detailProduct, setdetailProduct] = useState([])


    useEffect(()=>{
        if(params){
            products.forEach(product=>{
                if(product._id === params._id) setdetailProduct(product)
            })
        }
    }, [params, products])
    console.log(products)
    console.log(detailProduct)
    return (
        <div>
            detail
        </div>
    )
}

export default DetailProduct
