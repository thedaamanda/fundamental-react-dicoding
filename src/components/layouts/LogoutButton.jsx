import React, { useContext } from 'react';
import { MdLogout } from 'react-icons/md';
import { putAccessToken } from '../../utils/network-data';
import AuthContext from '../../contexts/AuthContext';

function LogoutButton() {
    const { auth, setAuth } = useContext(AuthContext);

    const handleLogout = () => {
        setAuth(null);
        putAccessToken('');
    };

    return (
        <>
            {auth ? (
                <button
                    type='button'
                    title='Logout'
                    className='logout-btn'
                    onClick={handleLogout}
                >
                    <MdLogout />
                    <span className='logout-btn__text'>{auth.name}</span>
                </button>
            ) : (
                ''
            )}
        </>
    );
}

export default LogoutButton;
