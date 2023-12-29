import React from 'react';
import RegisterInput from '../components/RegisterInput'
import { register } from '../utils/network-data';
import { Link, useNavigate } from 'react-router-dom';

function RegisterPage() {
    const navigate = useNavigate()

    const registerUser = async (user) => {
        try {
            const response = await register(user);

            if(!response.error) {
                alert("User successfully registered");
                navigate("/login");
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="auth-section">
            <div className="result-container">
                <div className="form-box">
                    <div className="heading">
                        <span className="tagline">Isi form untuk mendaftar akun.</span>
                        <h2 className="title">Daftar Akun</h2>
                    </div>
                    <RegisterInput register={registerUser} />
                    <div className="form-box-footer">
                        <p>Sudah punya akun? <Link to="/login">Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RegisterPage;
