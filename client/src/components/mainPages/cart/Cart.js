import React, {useContext, useState, useEffect} from 'react'
import {GlobalState} from '../../../GlobalState'
import useStyles from './styles'
import close from '../../Header/icon/close.svg'

import Axios from 'axios'
import { Link } from 'react-router-dom'
import PayPal from './PaypalButton'

function Cart() {
    const state = useContext(GlobalState)
    const [cart, setCart] = state.userAPI.cart
    const classes = useStyles()
    const [total, setTotal] = useState(0)
    const [token] = state.token

    useEffect(() =>{
        const getTotal = () =>{
            const total = cart.reduce((prev, item) => {
                return prev + (item.price * item.quantity)
            },0)

            setTotal(total)
        }

        getTotal()

    },[cart])

    if(cart.length === 0) return <h2 style={{textAlign: "center", fontSize: "5rem"}}>Cart Empty</h2> 
    

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

        setCart([...cart])
        addToCart(cart)
    }

      const removeProduct = id =>{
        if(window.confirm("Do you want to delete this product?")){
            cart.forEach((item, index) => {
                if(item._id === id){
                    cart.splice(index, 1)
                }
            })

            setCart([...cart])
            addToCart(cart)
        }
    }
    const tranSuccess = async(payment) => {
        const {paymentID, address} = payment;

        await Axios.post('/api/payment', {cart, paymentID, address}, {
            headers: {Authorization: token}
        })

        setCart([])
        addToCart([])
        alert("You have successfully placed an order.")
    }

    return (
            <>
                {
                cart.map(product => (
                    <div key={product._id} className={classes.Container}>
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
                                
                                <div className={classes.delete} onClick={() => removeProduct(product._id)} >X</div>
                            </div>
                            
                        </div>
                    </div>
                
                ))
                }
                <div className = {classes.total}>
                    <h3> Total: {total} </h3>
                    <PayPal/>
                </div>
            </>
    )
}

export default Cart
