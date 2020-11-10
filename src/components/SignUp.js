import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from '../axios';

function SignUp() {
    const history = useHistory();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signUp = (event) => {
        event.preventDefault();

        const user = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password
        };

        axios({
            method: 'post',
            url: '/user/register',
            data: user
        }).then(() => history.push('/login'))
          .catch(error => alert(error.message));
    }

    return (
        <div className="signUp">

            <div className="signUp__container">
                <h1>Sign Up</h1>

                <form>
                    <input 
                        type="text" 
                        value={firstName} 
                        placeholder="First Name"
                        onChange={e => setFirstName(e.target.value)}
                    />

                    <input 
                        type="text" 
                        value={lastName} 
                        placeholder="Second Name"
                        onChange={e => setLastName(e.target.value)}
                    />

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
                        onClick={signUp}
                        className="signUp__button"
                    >
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    )
}

export default SignUp;
