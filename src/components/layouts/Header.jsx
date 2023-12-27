import React, { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import AuthContext from '../../contexts/AuthContext'
import ThemeToggler from './ThemeToggler'
import LogoutButton from './LogoutButton'
import LangToggler from './LangToggler'

function Header() {
    const { auth } = useContext(AuthContext);
    const { pathname } = useLocation();

    return (
        <header className='template-header'>
            <div className='template-container'>
                <div className='header-inner'>
                    <div className='header-left'>
                        <div className='brand-logo'>
                            <Link to='/'>
                                <h1>Note App</h1>
                            </Link>
                        </div>
                    </div>
                    <div className='header-right'>
                        { auth ? (
                                <>
                                    <Link to='/archives' className="btn-archive">
                                        <h2>Archived Note</h2>
                                    </Link>
                                </>
                            ) : ''
                        }
                        <LangToggler />
                        <ThemeToggler />
                        <LogoutButton />
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
