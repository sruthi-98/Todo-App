import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from '../axios';

function SignUp() {
    const history = useHistory();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

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
          .catch(error => setErrorMessage(error?.message || error?.response?.data));
    }

    return (
        <div className="signUp">
            <div className="signUp__section">
                <h1 className="signUp__header">ToDo Manager</h1>

                <div className="signUp__container">
                    <h1 className="signUp__title">Sign Up</h1>

                    {errorMessage !== '' && <div className="signUp__error">{errorMessage}</div>}

                    <form className="signUp__form" onSubmit={signUp}>
                        <div className="signUp__formGroup">
                            <label className="signUp__formLabel signUp__formLabel--required">First Name</label>
                            <input 
                                className="signUp__formInput"
                                type="text" 
                                value={firstName} 
                                onChange={e => setFirstName(e.target.value)}
                                required={true}
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
                            <label className="signUp__formLabel signUp__formLabel--required">E-mail</label>
                            <input 
                                className="signUp__formInput"
                                type="text" 
                                value={email} 
                                onChange={e => setEmail(e.target.value)}
                                required={true}
                            />
                        </div>

                        <div className="signUp__formGroup">
                            <label className="signUp__formLabel signUp__formLabel--required">Password</label>
                            <input 
                                className="signUp__formInput"
                                type="password" 
                                value={password} 
                                onChange={e => setPassword(e.target.value)}
                                required={true}
                            />
                        </div>

                        <div className="signUp__formGroup">
                            <button
                                type="submit"
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
        </div>
    )
}

export default SignUp;
