import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import useStyles from './loginStyles'
import Axios from 'axios'

function Login() {
    const classes = useStyles()

    const [user, setUser] = useState({
        email: '', password: ''
    })
  
     const onChangeInput = e =>{
        const {name, value} = e.target;
        setUser({...user, [name]:value})
    }

    const loginSubmit = async e =>{
        e.preventDefault()
        try{
            const res = await Axios.post('/user/login', {...user})
            // await Axios.post('/user/login', {...user})
            localStorage.setItem('firstLogin',true)
            window.location.href="/"
           console.log(res)
        }catch(err){
            alert(err.response.data.msg)
        }
    }
    return (
        <div className={classes.loginPage}>
            <form  onSubmit={loginSubmit}>
                <div class="auth-form__header">
                    <h3 class="auth-form__heading">Login</h3>
                </div>
                <input type="email" name = "email" required placeholder="email" 
                value = {user.email} onChange={onChangeInput} />

                <input type="password" name = "password" required placeholder="password" 
                autoComplete='on' value = {user.password} onChange={onChangeInput}/>
            
                <div className = {classes.row}>
                    <Link to = '/register'>Register</Link>
                    <button type='submit'>Login</button>
                    
                </div>
            </form>
        </div>
    )
}

export default Login
