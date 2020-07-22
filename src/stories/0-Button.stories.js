import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from '../components/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

export default {
  component: Button,
  title: 'Button',
};


export const ButtonSignUp = () => <Button onClick={action('clicked')}>Sign Up</Button>;

export const ButtonSignIn = () => <Button onClick={action('clicked')}>Sign In</Button>;


