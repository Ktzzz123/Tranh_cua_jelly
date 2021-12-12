import Axios from 'axios'
import  {useState, useEffect} from 'react'

function UserAPI(token) {
    const [isLogged, setisLogged] = useState(false)
    const [isAdmin, setisAdmin] = useState(false)
    const [cart, setCart] = useState([])
    const [history, setHistory] = useState([])
   
   
   
   
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
                    console.log(token, 'token');
                    const res = await Axios.get('/user/infor', {
                        headers: {Authorization: token}
                    })
                    console.log(res)

                    setisLogged(true)
                    setCart(res.data.cart)
                    res.data.role === 1 ? setisAdmin(true) : setisAdmin(false)
                } catch (err) {
                    alert(err.response.data.msg)
                }
            }

            getUser()
            
        }
    },[token])

    useEffect(()=>{
        if(token){
            const getHistory = async()=>{
                const res = await Axios.get('/user/history',{
                    headers: {Authorization: token}
                })
                setHistory(res.data)

            }
            getHistory()

        }
    },[token])

    return {
        isLogged: [isLogged, setisLogged],
        isAdmin: [isAdmin, setisAdmin],
        cart: [cart, setCart],
        addCart: addCart,
        history: [history, setHistory]
    }
}

export default UserAPI
