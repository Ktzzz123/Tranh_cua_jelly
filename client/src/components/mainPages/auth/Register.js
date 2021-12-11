import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import useStyles from './loginStyles'
import Axios from 'axios'

function Register() {
    const classes = useStyles()

    const [user, setUser] = useState({
        name: '',email: '', password: ''
    })
  
     const onChangeInput = e =>{
        const {name, value} = e.target;
        setUser({...user, [name]:value})
    }
    const registerSubmit = async e =>{
        e.preventDefault()
        try{
            await Axios.post('/user/register', {...user})
            localStorage.setItem('firstLogin',true)
            window.location.href="/"
        }catch(err){
            alert(err.response.data.msg)
        }
    }
    return (
        <div className = {classes.loginPage}>
        <form onSubmit={registerSubmit}>
        <h3 class="auth-form__heading">Đăng ký</h3>

            <input type="text" name = "name" required placeholder="Name" 
            value = {user.name} onChange={onChangeInput} />

            <input type="email" name = "email" required placeholder="email" 
            value = {user.email} onChange={onChangeInput} />

            <input type="password" name = "password" required placeholder="password" 
            autoComplete='on' value = {user.password} onChange={onChangeInput}/>
              <div class="auth-form__aside">
                <p class="auth-form__policy-text">Bằng việc đăng ký, bạn đồng ý với điều khoản dịch vụ và chính sách bảo mật của chúng tôi</p>
                <a href="" class="auth-form__link">Diều khoản dịch vụ và chính sách bảo mật</a>
                            
            </div>
            <div className = {classes.row}>
                <Link to = '/login'>Login</Link>
                <button type='submit'>Register</button>

            </div>
        </form>
        </div>
    )
}

export default Register
