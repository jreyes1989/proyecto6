import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import './styles/login.css'

const Login = () => {

    const navigate = useNavigate()

    const [isLogged, setIsLogged] = useState(false)

    const {handleSubmit , register, reset} = useForm()

    const submit = data => {
        const URL = `https://e-commerce-api.academlo.tech/api/v1/users/login`
        axios.post(URL, data)
        .then(res => {
            console.log(res.data.data)
            localStorage.setItem("token" , res.data.data.token )
            setIsLogged(true)
            navigate("/")
            })
        .catch(err => console.log(err))

        reset({
            email:"",
            password: "",
        })
    }

    useEffect(() => {
      const condition = localStorage.getItem("token") ? true : false
      setIsLogged(condition)
    }, [])

    console.log(isLogged);

    const handlelogout = () => {
        localStorage.removeItem ("token")
        setIsLogged(false)
    }
    
    if (isLogged) {
        return (
           <div>
             <h1>Use Logged</h1>
            <button onClick={handlelogout}>logout</button>
           </div>
        )
    }

  return (
    <div className='container__login'>
        <div className='container__imput'>

                <div className='login__title'>
                    <h2>Welcome! Enter your email and password</h2>
                </div>
            <div className='card__login'>
                <form onSubmit={handleSubmit(submit)}>
                <div className='input__email'>
                    <label htmlFor="email">Email</label>
                    <input type="text" id='email' {...register("email")} />
                </div>

                <div className='input__password'>
                    <label htmlFor="password">Password</label>
                    <input type="password" id='password' {...register("password")} />
                </div>

                <div className='boton_login'>
                    <button>Login</button>
                </div>
            </form>
                </div>
        </div>
    </div>
  )
}

export default Login