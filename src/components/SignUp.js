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
            <h1 className="signUp__header">ToDo Manager</h1>

            <div className="signUp__container">
                <h1 className="signUp__title">Sign Up</h1>

                <form className="signUp__form">
                    <div className="signUp__formGroup">
                        <label className="signUp__formLabel">First Name</label>
                        <input 
                            className="signUp__formInput"
                            type="text" 
                            value={firstName} 
                            onChange={e => setFirstName(e.target.value)}
                        />
                    </div>

                    <div className="signUp__formGroup">
                        <label className="signUp__formLabel">Last Name</label>
                        <input 
                            className="signUp__formInput"
                            type="text" 
                            value={lastName} 
                            onChange={e => setLastName(e.target.value)}
                        />
                    </div>

                    <div className="signUp__formGroup">
                        <label className="signUp__formLabel">E-mail</label>
                        <input 
                            className="signUp__formInput"
                            type="text" 
                            value={email} 
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="signUp__formGroup">
                        <label className="signUp__formLabel">Password</label>
                        <input 
                            className="signUp__formInput"
                            type="password" 
                            value={password} 
                            onChange={e => setPassword(e.target.value)}
                        />
                    </div>

                    <div className="signUp__formGroup">
                        <button
                            type="submit"
                            onClick={signUp}
                            className="signUp__button"
                        >
                            Sign Up
                        </button>

                        <p className="signUp__login">
                            Already have an account? Log in <Link className="signUp__link" to='/login'>here</Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUp;
