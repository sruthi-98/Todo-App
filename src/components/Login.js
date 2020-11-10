import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
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
                        onClick={login}
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
