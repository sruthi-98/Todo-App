import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from '../axios';

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = (event) => {
        event.preventDefault();

        const user = {
            email: email,
            password: password
        };

        axios({
            method: 'post',
            url: '/user/login',
            data: user
        })
        .then(result => {
            localStorage.setItem('userId', result?.data?.user?.id);
            history.push('/tasks')
        })
        .catch(error => alert(error.message));
    }

    return (
        <div className="login">
            <h1 className="login__title">ToDo Manager</h1>
        
            <div className="login__container">
                <h1>Log In</h1>

                <form className="login__form">
                    <div className="login__formGroup">
                        <label>E-mail</label>
                        <input 
                            type="text" 
                            value={email} 
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="login__formGroup">
                        <label>Password</label>
                        <input 
                            type="password" 
                            value={password} 
                            onChange={e => setPassword(e.target.value)}
                        />
                    </div>
                
                    <button
                        type="submit"
                        onClick={login}
                        className="login__button"
                    >
                        Log In
                    </button>

                    <p className="login__signup">
                        Dont’t have an account? Sign up <Link to='/signup'>here</Link>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default Login;
