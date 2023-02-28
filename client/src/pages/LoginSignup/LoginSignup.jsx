import React, { useState } from 'react'
import './loginSignup.css'
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_USER, LOGIN_USER } from '../../utils/mutations';
import Auth from '../../utils/auth';



const LoginSignup = () => {
    const [signupState, setSignupState] = useState({
        firstName: '',
        lastName: '',
        dob: '',
        email: '',
        password: '',
        passConf: '',        
    });
    const [loginState, setLoginState] = useState({
        email: '',
        password: '',
    });
    const [addUser, { error: addUserErr }] = useMutation(ADD_USER);
    const [login, { error: loginErr }] = useMutation(LOGIN_USER);
    const navigate = useNavigate();
    const signupHandleInputChange = (event) => {
        const { name, value } = event.target;
    
        setSignupState({
            ...signupState,
            [name]: value,
        });
    };
    const loginHandleInputChange = (event) => {
        const { name, value } = event.target;
    
        setLoginState({
            ...loginState,
            [name]: value,
        });
    };

    const handleSwitch = (e) => {
        const switchers = [...document.querySelectorAll('.switcher')]
        console.log(e)
        switchers.forEach(item => item.parentElement.classList.remove('is-active'))
        e.target.parentElement.classList.add('is-active')
    };
    const handleLogin = async (event) => {
        event.preventDefault();
        console.log('clicked login', loginState);
        try {
            const { data } = await login({
                variables: { ...loginState },
            });
            Auth.login(data.login.token);
            navigate('/profile');
            console.log('in the try', loginState);
            } catch (e) {
            console.error(e);
            }
          // clear form values
        setLoginState({
            email: '',
            password: '',
        });
    }
    const handleSignUp = async (event) => {
        event.preventDefault();
        console.log(signupState);
    
        try {
            const { data } = await addUser({
                variables: { ...signupState },
            });
    
            Auth.login(data.addUser.token);
            navigate('/profile');
            console.log('success')
        } catch (e) {
            console.error(e);
        }
    };
    
    return (
        <section className="forms-section">
            <div className="forms">
                <div className="form-wrapper is-active">
                    <button type="button" className="switcher switcher-login" onClick={handleSwitch}>
                        Login
                        <span className="underline"></span>
                    </button>
                        <form className="form form-login">
                        <fieldset>
                            <legend>Please, enter your email and password for login.</legend>
                            <div className="input-block">
                                <label htmlFor="login-email">E-mail</label>
                                <input id="login-email" name="email" value={loginState.email} onChange={loginHandleInputChange} type="email" required autoComplete='on' />
                            </div>
                            <div className="input-block">
                                <label htmlFor="login-password">Password</label>
                                <input id="login-password" name="password" value={loginState.password} onChange={loginHandleInputChange} type="password" required autoComplete='on' />
                            </div>
                        </fieldset>
                        <button type="submit" className="btn-login" onClick={handleLogin}>Login</button>
                    </form>
                </div>
                <div className="form-wrapper">
                    <button type="button" className="switcher switcher-signup" onClick={handleSwitch}>
                        Sign Up
                        <span className="underline"></span>
                    </button>
                    <form className="form form-signup">
                        <fieldset>
                            <legend>Please, enter your name, email, date of birth, password and password confirmation for sign up.</legend>
                                <div className="input-block-signup">
                                    <label htmlFor="signup-first-name">First Name</label>
                                    <input id="signup-first-name" name="firstName" value={signupState.firstName} onChange={signupHandleInputChange} type="text" required autoComplete='on' />
                                </div>
                                <div className="input-block-signup">
                                    <label htmlFor="signup-last-name">Last Name</label>
                                    <input id="signup-last-name" name="lastName" value={signupState.lastName} onChange={signupHandleInputChange} type="text" required autoComplete='on' />
                                </div>
                                <div className="input-block-signup">
                                    <label htmlFor="signup-email">E-mail</label>
                                    <input id="signup-email" name="email" value={signupState.email} onChange={signupHandleInputChange} type="email" required autoComplete='on' />
                                </div>
                                <div className="input-block-signup">
                                    <label htmlFor="signup-dob">Date of Birth</label>
                                    <input id="signup-dob" name="dob" value={signupState.dob} onChange={signupHandleInputChange} type="date" required autoComplete='on' />
                                </div>
                                <div className="input-block-signup">
                                    <label htmlFor="signup-password">Password</label>
                                    <input id="signup-password" name="password" value={signupState.password} onChange={signupHandleInputChange} type="password" required autoComplete='on' />
                                </div>
                                <div className="input-block-signup">
                                    <label htmlFor="signup-password-confirm">Confirm password</label>
                                    <input id="signup-password-confirm" name="passConf" value={signupState.passConf} onChange={signupHandleInputChange} type="password" required autoComplete='on' />
                                </div>
                        </fieldset>
                        <button type="button" className="btn-signup" onClick={handleSignUp}>Continue</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default LoginSignup