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
            <div className="login__section">
                <h1 className="login__header">ToDo Manager</h1>
            
                <div className="login__container">
                    <h1 className="login__title">Login</h1>

                    <form className="login__form">
                        <div className="login__formGroup">
                            <label className="login__formLabel">E-mail</label>
                            <input 
                                className="login__formInput"
                                type="text" 
                                value={email} 
                                onChange={e => setEmail(e.target.value)}
                            />
                        </div>

                        <div className="login__formGroup">
                            <label className="login__formLabel">Password</label>
                            <input 
                                className="login__formInput"
                                type="password" 
                                value={password} 
                                onChange={e => setPassword(e.target.value)}
                            />
                        </div>
                    
                        <div className="login__formGroup">
                            <button
                                type="submit"
                                onClick={login}
                                className="login__button"
                            >
                                Log In
                            </button>

                            <p className="login__signup">
                                Dont’t have an account? Sign up <Link className="login__link" to='/signup'>here</Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;
