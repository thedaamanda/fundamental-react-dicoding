import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { Navigate, useLocation } from 'react-router-dom'
import AuthContext from '../contexts/AuthContext'

function RouteMiddleware({ children, middleware }) {
    const { auth } = useContext(AuthContext)
    const location = useLocation()

    const middlewares = ['guest', 'auth'];

    if (!middlewares.includes(middleware)) {
        return <Navigate to={{ pathname: '/login', state: { from: location } }} replace />
    }

    if (middleware === 'guest' && auth) {
        return <Navigate to={{ pathname: '/', state: { from: location } }} replace />
    }

    if (middleware === 'auth' && !auth) {
        return <Navigate to={{ pathname: '/login', state: { from: location } }} replace />
    }

    return children
}

RouteMiddleware.propTypes = {
    children: PropTypes.element.isRequired,
    // middleware: PropTypes.oneOf(['guest', 'auth']).isRequired
    middleware: PropTypes.string.isRequired
}

export default RouteMiddleware;
