import React from 'react'
import "./Login.css";
import logo from "../src/imgs/discord1.png";

function Login() {
    return (
        <div classNmae="login">
            <h2>I am login page!</h2>

            <div className="login__logo">
                <img src={logo} alt="" />
            </div>
        </div>
    )
}

export default Login
