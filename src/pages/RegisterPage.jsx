import React from 'react';
import PropTypes from 'prop-types';
import RegisterInput from '../components/auth/RegisterInput';
import { register } from '../utils/network-data';
import { Link, useNavigate } from 'react-router-dom';
import useLanguage from '../hooks/useLanguage';

function RegisterPage() {
    const navigate = useNavigate();
    const textRegister = useLanguage('register');
    const textApp = useLanguage('app');

    const registerUser = async (user) => {
        try {
            const response = await register(user);

            if (!response.error) {
                alert(textApp.message.alert.success.register);
                navigate('/login');
            }
        } catch (error) {
            alert(textApp.message.alert.error.error);
        }
    };

    return (
        <div className='auth-section'>
            <div className='result-container'>
                <div className='form-box'>
                    <div className='heading'>
                        <span className='tagline'>{textRegister.header}</span>
                        <h2 className='title'>{textRegister.title}</h2>
                    </div>
                    <RegisterInput register={registerUser} />
                    <div className='form-box-footer'>
                        <p>
                            {textRegister.footer}{' '}
                            <Link to='/login'>{textRegister.footerLink}</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

RegisterPage.propTypes = {
    register: PropTypes.func,
};

export default RegisterPage;
