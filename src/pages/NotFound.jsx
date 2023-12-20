import React from 'react';
import { Link } from 'react-router-dom';
import sadImg from '/images/sad.png';

class NotFound extends React.Component {
    render() {
        return (
            <div className="error-wrapper">
                <div className="container">
                    <img className="img-100" src={sadImg} alt="Sad" />
                    <div className="error-heading">
                        <h2 className="headline font-danger">404</h2>
                    </div>
                    <div className="error-body">
                        <p className="sub-content">The page you are attempting to reach is currently not available. This may be because the page does not exist or has been moved.</p>
                    </div>
                    <div className="btn-wrapper">
                        <Link to="/" className="btn btn-danger-gradien btn-lg">BACK TO HOME PAGE</Link>
                    </div>
                </div>
            </div>
        );
    }
}
export default NotFound;
