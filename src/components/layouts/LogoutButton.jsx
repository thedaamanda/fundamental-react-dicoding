import React, { useContext } from 'react'
import { MdLogout } from 'react-icons/md'
import AuthContext from '../../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'

function LogoutButton() {
    const { auth } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleLogout = () => {
        localStorage.removeItem('accessToken')
        navigate('/login')
    }

    return (
        <>
            { auth ? (
                    <button className="logout-btn" onClick={handleLogout}>
                        <MdLogout />

                        <span className="logout-btn__text">
                            Logout
                        </span>
                    </button>
                ) : ''
            }
        </>
    )
}

export default LogoutButton
