import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';
import useLanguage from '../hooks/useLanguage';

function RegisterInput({ register }) {
    const [name, onNameChange] = useInput('');
    const [email, onEmailChange] = useInput('');
    const [password, onPasswordChange] = useInput('');
    const [confirmPassword, onConfirmPasswordChange] = useInput('');

    const text = useLanguage('app');

    const onSubmitHandler = (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert(text.message.alert.error.passwordNotMatch);
            return;
        }

        register({ name, email, password });
    };

    return (
        <div className='form-box-body'>
            <form
                className='form'
                id='register-form'
                onSubmit={onSubmitHandler}
            >
                <div className='form-group'>
                    <label htmlFor='name'>{text.input.label.name}</label>
                    <input
                        type='text'
                        id='name'
                        name='name'
                        placeholder={text.input.placeholder.name}
                        value={name}
                        onChange={onNameChange}
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='email'>{text.input.label.email}</label>
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
                <div className='form-group'>
                    <label htmlFor='password_confirmation'>
                        {text.input.label.confirmPassword}
                    </label>
                    <input
                        type='password'
                        id='password_confirmation'
                        name='password_confirmation'
                        placeholder={text.input.placeholder.confirmPassword}
                        value={confirmPassword}
                        onChange={onConfirmPasswordChange}
                        autoComplete='on'
                    />
                </div>
                <div className='form-group field-group'>
                    <button type='submit' id='btnRegisterForm'>
                        {text.register}
                    </button>
                </div>
            </form>
        </div>
    );
}

RegisterInput.propTypes = {
    register: PropTypes.func.isRequired,
};

export default RegisterInput;
