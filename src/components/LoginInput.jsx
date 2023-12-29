import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

function LoginInput({ login }) {
    const [email, onEmailChange] = useInput("");
    const [password, onPasswordChange] = useInput("");

    const onSubmitHandler = (event) => {
        event.preventDefault();

        login({ email, password });
    }

    return (
        <div className="form-box-body">
            <form className="form" id="login-form" onSubmit={onSubmitHandler}>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="Masukkan Email" value={email} onChange={onEmailChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" placeholder="Masukkan Password" value={password} onChange={onPasswordChange} autoComplete="on" />
                </div>
                <div className="form-group field-group">
                    <button type="submit" id="btnLoginForm">Masuk</button>
                </div>
            </form>
        </div>
    );
}

LoginInput.propTypes = {
    login: PropTypes.func.isRequired,
}

export default LoginInput;
