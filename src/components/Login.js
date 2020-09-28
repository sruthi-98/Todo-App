import React, { useState } from 'react';
// import { Link, useHistory } from 'react-router-dom';
import '../styles/Login.css';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className="login">
            {/* <Link to="/">
                <img
                    className="login__logo" 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
                    alt=""
                /> 
            </Link> */}

            <div className="login__container">
                <h1>Log In</h1>

                <form>
                    <input 
                        type="text" 
                        value={email} 
                        placeholder="E-mail"
                        onChange={e => setEmail(e.target.value)}
                    />

                    <input 
                        type="password" 
                        value={password} 
                        placeholder="Password"
                        onChange={e => setPassword(e.target.value)}
                    />

                    <button
                        type="submit"
                        // onClick={login}
                        className="login__button"
                    >
                        Log In
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Login;
