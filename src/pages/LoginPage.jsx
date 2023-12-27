import React from 'react';
import { login } from '../utils/network-data';
import { Link, useNavigate } from 'react-router-dom';
import LoginInput from '../components/LoginInput'

function LoginPage() {
    const navigate = useNavigate()

    async function loginUser(user) {
        try {
            const response = await login(user);

            if(!response.error) {
                alert("Login berhasil");
                navigate("/");
                return;
            }
        } catch (error) {
            alert(error.message);
        }
    }

    return (
        <div className="auth-section">
            <div className="result-container">
                <div className="form-box">
                    <div className="heading">
                        <span className="tagline">Yuk, login untuk menggunakan aplikasi.</span>
                        <h2 className="title">Masuk</h2>
                    </div>
                    <LoginInput login={loginUser} />
                    <div className="form-box-footer">
                        <p>Belum punya akun? <Link to="/register">Daftar</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
