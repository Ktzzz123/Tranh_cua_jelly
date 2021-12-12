import Axios from 'axios'
import React, {useContext,useState } from 'react'
import {GlobalState} from '../../../GlobalState'
import Loading from '../utilts/loading/loading'
import ProductItem from './ProductItem/ProductItem'


// import useStyles from './styles'

function Products() {
    // const classes = useStyles()
    const state = useContext(GlobalState)
    const [products]= state.productsAPI.products
    const [isAdmin]=state.userAPI.isAdmin
    const [token] = state.token
    const [callback, setCallback] = state.productsAPI.callback
    const [loading, setLoading] = useState(false)

    const deleteProduct = async(id, public_id) => {
        try {
            setLoading(true)
            const destroyImg = Axios.post('/api/destroy', {public_id},{
                headers: {Authorization: token}
            })
            const deleteProduct = Axios.delete(`/api/products/${id}`, {
                headers: {Authorization: token}
            })

            await destroyImg
            await deleteProduct
            setCallback(!callback)
            setLoading(false)
        } catch (err) {
            alert(err.response.data.msg)
        }
    }

    return (
        <>
        
        <div className="products">
           {
            products.map(product=>{
                   return <ProductItem key = {product._id} product = {product}
                       isAdmin={isAdmin} deleteProduct={deleteProduct}
                   />
               })
           }
        </div>
        {products.length === 0 && <Loading/>}
        </>
    )
}

export default Products
 