import React, {useState} from 'react';
import {link} from 'react-router-dom';
import {useMutation} from '@apollo/client';
import {LOGIN_USER} from '../utils/mutations.js';
import Auth from '../utils/auth';
import iconPath from '../images/squareIconSm.png';
// import styles

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Login = (props) => {
    const [formState, setFormState] = useState({username: '', password: ''});
    const [login, {error, data}] = useMutation(LOGIN_USER);

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    //submit form
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            const {data} = await login ({
                variables: {...formState},
            });

            Auth.login(data.login.token);
        } catch (e) {
            console.error(e);
        }

        //clear form
        setFormState({
            username: '',
            password: '',
        });
    };


    return (
        <div class='body-external'>
            <div class='about-me-title'>LOGIN</div>
            {data ? (
                <p>Logged in visit your {''} <link to='/account'>account</link></p> 
            ) : (
                <div>
                    <Form onSubmit={handleFormSubmit} class='user-bar'>
                        <Form.Control
                        placeholder='Username'
                        name='username'
                        type='text'
                        value={formState.username}
                        onChange={handleChange}
                        />
                        
                        <Form.Control class='password-bar'
                        placeholder='password'
                        name='password'
                        type='password'
                        value={formState.password}
                        onChange={handleChange}
                        />
                    </Form>
                    <button type="submit"> LOGIN </button>
                </div>
            )
        }

        </div>
    )
}

export default Login;
