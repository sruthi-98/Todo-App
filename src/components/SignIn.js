import React, { useState } from 'react';
// import { Link, useHistory } from 'react-router-dom';
import '../styles/SignIn.css';

function SignIn() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className="signIn">
            {/* <Link to="/">
                <img
                    className="signIn__logo" 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
                    alt=""
                /> 
            </Link> */}

            <div className="signIn__container">
                <h1>Sign-in</h1>

                <form>
                    <input 
                        type="text" 
                        value={name} 
                        placeholder="Name"
                        onChange={e => setName(e.target.value)}
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
                        // onClick={signIn}
                        className="signIn__button"
                    >
                        Sign In
                    </button>
                </form>
            </div>
        </div>
    )
}

export default SignIn;
