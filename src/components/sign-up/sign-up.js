import React, { useState } from 'react'
import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';
import { auth, createUserProfile } from '../../utils/FirebaseUtil'
import './sign-up.scss';

const SignUp = () => {
    const [signupUser, setUser] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const { displayName, email, password, confirmPassword } = signupUser;

    const onSubmit = async e => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert('Passwords don\'nt match!');
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfile(user, { displayName });
            setUser({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            });
        } catch (error) {
            console.log(error);
        }

    }

    const onChange = e => {
        setUser({ ...signupUser, [e.target.name]: e.target.value });
    }

    return (
        <div className="sign-up">
            <h2 className="title">I do not have acount</h2>
            <span>Sign up with email and password</span>
            <form className="sign-up-form" onSubmit={onSubmit}>
                <FormInput label="Display Name" type="text" name="displayName"
                    value={displayName} onChange={onChange} required />
                <FormInput label="Email" type="email" name="email"
                    value={email} onChange={onChange} required />
                <FormInput label="Password" type="password" name="password"
                    value={password} onChange={onChange} required />
                <FormInput label="Confirm Password" type="password" name="confirmPassword"
                    value={confirmPassword} onChange={onChange} required />
                <CustomButton type="submit">SIGN UP</CustomButton>
            </form>
        </div>
    )
}

export default SignUp
