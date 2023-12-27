import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { Navigate, useLocation } from 'react-router-dom'
import AuthContext from '../contexts/AuthContext'

function RouteMiddleware({ children, middleware }) {
    const { authenticated } = useContext(AuthContext)
    const location = useLocation()

    const middlewares = ['guest', 'auth'];

    if (!middlewares.includes(middleware)) {
        throw new Error(`Invalid middleware prop: ${middleware}. Valid middleware props are: ${middlewares.join(', ')}`)
    }

    if (middleware === 'guest' && authenticated) {
        return <Navigate to={{ pathname: '/', state: { from: location } }} replace />
    }

    if (middleware === 'auth' && !authenticated) {
        return <Navigate to={{ pathname: '/login', state: { from: location } }} replace />
    }

    return children
}

RouteMiddleware.propTypes = {
    children: PropTypes.node.isRequired,
    middleware: PropTypes.oneOf(['guest', 'auth']).isRequired
}

export default RouteMiddleware;
