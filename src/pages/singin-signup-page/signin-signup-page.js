import React from 'react';
import Login from '../../components/login/login';
import SignUp from '../../components/sign-up/sign-up';

import './signin-signup-page.scss';

const SigninSignupPage = () => {
    return (
        <div className="signin-signup-page">
            <Login />
            <SignUp />
        </div>
    )
}

export default SigninSignupPage;
