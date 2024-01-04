import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../../hooks/useInput';
import useLanguage from '../../hooks/useLanguage';

function LoginInput({ login }) {
    const [email, onEmailChange] = useInput('');
    const [password, onPasswordChange] = useInput('');

    const text = useLanguage('app');

    const onSubmitHandler = (event) => {
        event.preventDefault();

        login({ email, password });
    };

    return (
        <div className='form-box-body'>
            <form className='form' id='login-form' onSubmit={onSubmitHandler}>
                <div className='form-group'>
                    <label htmlFor='email'>{text.input.label.name}</label>
                    <input
                        type='email'
                        id='email'
                        name='email'
                        placeholder={text.input.placeholder.email}
                        value={email}
                        onChange={onEmailChange}
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='password'>
                        {text.input.label.password}
                    </label>
                    <input
                        type='password'
                        id='password'
                        name='password'
                        placeholder={text.input.placeholder.password}
                        value={password}
                        onChange={onPasswordChange}
                        autoComplete='on'
                    />
                </div>
                <div className='form-group field-group'>
                    <button type='submit' id='btnLoginForm'>
                        {text.login}
                    </button>
                </div>
            </form>
        </div>
    );
}

LoginInput.propTypes = {
    login: PropTypes.func.isRequired,
};

export default LoginInput;
