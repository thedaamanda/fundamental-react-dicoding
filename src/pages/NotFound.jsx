import React from 'react';
import { Link } from 'react-router-dom';
import sadImg from '/images/sad.png';

class NotFound extends React.Component {
    render() {
        return (
            <div class="error-wrapper">
                <div class="container">
                    <img class="img-100" src={sadImg} alt="Sad" />
                    <div class="error-heading">
                        <h2 class="headline font-danger">404</h2>
                    </div>
                    <div class="col-md-8 offset-md-2">
                        <p class="sub-content">The page you are attempting to reach is currently not available. This may be because the page does not exist or has been moved.</p>
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
