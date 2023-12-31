import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { getUserLogged, login, putAccessToken } from '../utils/network-data';
import { Link, useNavigate } from 'react-router-dom';
import LoginInput from '../components/auth/LoginInput';
import AuthContext from '../contexts/AuthContext';
import useLanguage from '../hooks/useLanguage';

function LoginPage() {
    const { setAuth } = useContext(AuthContext);
    const navigate = useNavigate();
    const textLogin = useLanguage('login');
    const textApp = useLanguage('app');

    const loginUser = async (user) => {
        try {
            const { data } = await login(user);
            putAccessToken(data.accessToken);
            const userLogged = await getUserLogged();
            setAuth(userLogged.data);
            navigate('/');
        } catch (error) {
            alert(textApp.message.alert.error.error);
        }
    };

    return (
        <div className='auth-section'>
            <div className='result-container'>
                <div className='form-box'>
                    <div className='heading'>
                        <span className='tagline'>{textLogin.header}</span>
                        <h2 className='title'>{textLogin.title}</h2>
                    </div>
                    <LoginInput login={loginUser} />
                    <div className='form-box-footer'>
                        <p>
                            {textLogin.footer}{' '}
                            <Link to='/register'>{textLogin.footerLink}</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

LoginPage.propTypes = {
    login: PropTypes.func,
};

export default LoginPage;
