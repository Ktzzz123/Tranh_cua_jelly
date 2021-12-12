import Axios from 'axios'
import  {useState, useEffect} from 'react'

function UserAPI(token) {
    const [isLogged, setisLogged] = useState(false)
    const [isAdmin, setisAdmin] = useState(false)
    const [cart, setCart] = useState([])

    const addCart = async (product) => {
        if(!isLogged) return alert("Please login to continue buying")

        const check = cart.every(item =>{
            return item._id !== product._id
        })

        if(check){
            setCart([...cart, {...product, quantity: 1}])

            await Axios.patch('/user/addcart', {cart: [...cart, {...product, quantity: 1}]}, {
                headers: {Authorization: token}
            })

        }else{
            alert("This product has been added to cart.")
        }
    }


    useEffect(() =>{
        if(token){
            const getUser = async () =>{
                try {
                    const res = await Axios.get('/user/infor', {
                        headers: {Authorization: token}
                    })

                    setisLogged(true)
                    setCart(res.data.cart)
                    res.data.role === 1 ? setisAdmin(true) : setisAdmin(false)
                    console.log(res)
                } catch (err) {
                    alert(err.response.data.msg)
                }
            }

            getUser()
            
        }
    },[token])
    return {
        isLogged: [isLogged, setisLogged],
        isAdmin: [isAdmin, setisAdmin],
        cart: [cart, setCart],
        addCart : addCart
    }
}

export default UserAPI
