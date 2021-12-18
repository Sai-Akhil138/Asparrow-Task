import React, { useState } from 'react'
import '../styles/login.css'

import login from '../img/login.png'

const Login = () => {

    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const validateForm = () => {
        return email.length > 0 && pass.length > 0;
    }

    return (
        <div className="login" >
            <div className="wrapper">
                <div className="login-left">
                    <img src={login} alt="" />
                </div>
                <div>
                    <h2 className="mb-5 fw-bold text-center mb-3">Login Form</h2>
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)} required type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input placeholder='Enter your password' value={pass} onChange={(e) => setPass(e.target.value)} required type="password" className="form-control" id="exampleInputPassword1" />
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye" viewBox="0 0 16 16">
                                <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                                <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                            </svg>
                        </div>
                        <button type="submit" className="btn btn-primary" disabled={!validateForm()}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="me-2 bi bi-box-arrow-in-right" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z" />
                                <path fill-rule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z" />
                            </svg>
                            <a href="/user" className='text-white text-decoration-none'>Login</a>
                        </button>
                            <p className="register">Don't have an account ? <a href="/register">Register here</a></p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
