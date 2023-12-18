import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="template-header">
        <div className="template-container">
            <div className="header-inner">
                <div class="header-left">
                    <div class="brand-logo">
                        <Link to="/">
                            <h1>Note App</h1>
                        </Link>
                    </div>
                </div>
                <div class="header-right">
                    <Link to="/archives">
                        <h2>Archived Note</h2>
                    </Link>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header;
