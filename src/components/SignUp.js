import React, { useState } from 'react';
// import { Link, useHistory } from 'react-router-dom';
import '../styles/SignUp.css';

function SignUp() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className="signUp">
            {/* <Link to="/">
                <img
                    className="signUp__logo" 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
                    alt=""
                /> 
            </Link> */}

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
                        // onClick={signUp}
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
