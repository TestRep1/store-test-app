import React, { useState } from 'react';
import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';
import { signWithGoogle } from '../../utils/FirebaseUtil';

import './login.scss';

const Login = () => {
    const [user, setUser] = useState({ email: '', password: '' });

    const onSubmit = e => {
        e.preventDefault();

    }

    const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

    return (
        <div className="sing-in">
            <h2>I already have an account</h2>
            <span>Sing in with your email and password</span>
            <form onSubmit={onSubmit}>
                <FormInput name="email" type="email" value={user.email} required onChange={onChange} label="Email" />
                <FormInput name="password" type="password" value={user.password} required onChange={onChange} label="Password" />
                <div className="buttons">
                    <CustomButton type="submit">Login</CustomButton>
                    <CustomButton onClick={signWithGoogle} classes="google-sign-in">Login with Google</CustomButton>
                </div>
            </form>

        </div>

    )
}

export default Login
