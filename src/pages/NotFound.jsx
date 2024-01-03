import React from 'react';
import { Link } from 'react-router-dom';
import sadImg from '/images/sad.png';
import useLanguage from '../hooks/useLanguage';

function NotFound() {
    const text = useLanguage('notFound')

    return (
        <div className="error-wrapper">
            <div className="container">
                <img className="img-100" src={sadImg} alt="Sad" />
                <div className="error-heading">
                    <h2 className="headline font-danger">404</h2>
                </div>
                <div className="error-body">
                    <p className="sub-content">{text.description}</p>
                </div>
                <div className="btn-wrapper">
                    <Link to="/" className="btn btn-danger-gradien btn-lg">{text.button}</Link>
                </div>
            </div>
        </div>
    );
}

export default NotFound;
