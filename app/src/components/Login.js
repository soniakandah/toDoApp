import React, { useState } from 'react';
import { connect } from 'react-redux';
import { attemptLogin } from '../store/authReducer';

function Login(props) {
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');

    const login = e => {
        e.preventDefault();
        props.dispatch(attemptLogin(email, password));
    };

    return (
        <div>
            <form onSubmit={login}>
                <h1>Login</h1>
                <label>
                    Email:{' '}
                    <input
                        type='text'
                        value={email}
                        onChange={e => {
                            setEmail(e.target.value);
                        }}
                    />
                </label>
                <label>
                    Password:{' '}
                    <input
                        type='text'
                        value={password}
                        onChange={e => {
                            setPassword(e.target.value);
                        }}
                    />
                </label>
                <button>Submit</button>
            </form>
        </div>
    );
}

export default connect()(Login);
