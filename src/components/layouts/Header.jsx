import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="template-header">
        <div className="template-container">
            <div className="header-inner">
                <div className="header-center">
                    <div className="brand-logo">
                        <Link to="/">
                            <h1>Note App</h1>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header;
