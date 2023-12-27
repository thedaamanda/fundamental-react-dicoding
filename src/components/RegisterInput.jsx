import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

function RegisterInput({ register }) {
    const [name, onNameChange] = useInput("");
    const [email, onEmailChange] = useInput("");
    const [password, onPasswordChange] = useInput("");
    const [confirmPassword, onConfirmPasswordChange] = useInput("");

    const onSubmitHandler = (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert("Password dan konfirmasi password tidak sama");
            return;
        }

        register({ name, email, password });
    }

    return (
        <div className="form-box-body">
            <form className="form" id="register-form" onSubmit={onSubmitHandler}>
                <div className="form-group">
                    <label htmlFor="name">Nama</label>
                    <input type="text" id="name" name="name" placeholder="Masukkan Nama" value={name} onChange={onNameChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="Masukkan Email" value={email} onChange={onEmailChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" placeholder="Masukkan Password" value={password} onChange={onPasswordChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="password_confirmation">Konfirmasi Password</label>
                    <input type="password" id="password_confirmation" name="password_confirmation" placeholder="Masukkan Konfirmasi Password" value={confirmPassword} onChange={onConfirmPasswordChange} />
                </div>
                <div className="form-group field-group">
                    <button type="submit" id="btnRegisterForm">Daftar</button>
                </div>
            </form>
        </div>
    );
}

RegisterInput.propTypes = {
    register: PropTypes.func.isRequired,
}

export default RegisterInput;
