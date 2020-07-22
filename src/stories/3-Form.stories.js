import React from 'react';
import FormResetPwd from '../components/FormResetPassword';
import FormSignIn from '../components/FormSignIn';
import FormSignUp from '../components/FormSignUp';
import 'bootstrap/dist/css/bootstrap.min.css';

export default {
    component: {FormResetPwd, FormSignUp, FormSignIn },
    title: 'Form',
};


export const ResetPassword = () => <FormResetPwd/>;

export const SignUp = () => <FormSignUp/>;

export const SignIn = () => <FormSignIn/>;