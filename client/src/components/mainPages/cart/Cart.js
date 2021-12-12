import React, {useContext, useState, useEffect} from 'react'
import {GlobalState} from '../../../GlobalState'
import useStyles from '../products/detailProduct/styles'

import Axios from 'axios'
import { Link } from 'react-router-dom'

function Cart() {
    const state = useContext(GlobalState)
    const [cart, setCart] = state.userAPI.cart
    const classes = useStyles()
    const [total, setTotal] = useState(0)
    const [token] = state.token

    
    if(cart.length === 0) 
        return <h2 style={{textAlign: "center", fontSize: "5rem"}}>Cart Empty</h2> 
        const addToCart = async (cart) =>{
            await Axios.patch('/user/addcart', {cart}, {
                headers: {Authorization: token}
            })
        }
        const increment = (id) =>{
            cart.forEach(item => {
                if(item._id === id){
                    item.quantity += 1
                }
            })
    
            setCart([...cart])
            addToCart(cart)
        }
    
        const decrement = (id) =>{
            cart.forEach(item => {
                if(item._id === id){
                    item.quantity === 1 ? item.quantity = 1 : item.quantity -= 1
                }
            })
        }
    return (
            <>
                {
                cart.map(product => (
                    <div className={classes.Container +classes.cart }>
                        <img className={classes.images} src={product.images.url} alt = "" />
                        <div className = {classes.box_detail}>
                            <div className = {classes.row}>
                                <h2>{product.title}</h2>
                            </div>
                            <span>$ {product.price * product.quantity}</span>
                            <p>{product.description}</p>
                            <p>{product.content}</p>
                            <p>sold: {product.sold}</p>
                            <div className={classes.amount}>
                                <button onClick={() => decrement(product._id)}> - </button>
                                <span>{product.quantity}</span>
                                <button onClick={() => increment(product._id)}> + </button>
                            </div>
                            <div className={classes.delete}>X</div>
                        </div>
                    </div>
                
                ))
                }
                <div className = {classes.total}>
                    <h3> Total: {total} </h3>
                    <Link to = '#!'>Payment</Link>
                </div>
            </>
    )
}

export default Cart
