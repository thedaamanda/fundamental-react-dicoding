import React from 'react'
import { Navigate, useRoutes } from 'react-router-dom'
import RouteMiddleware from '../middleware/RouteMiddleware'
import HomePage from '../pages/HomePage';
import ArchivedPage from '../pages/ArchivedPage';
import AddPage from '../pages/AddPage';
import DetailPage from '../pages/DetailPage';
import NotFound from '../pages/NotFound';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';

const Routes = () => useRoutes([
    {
        path: '/',
        element: <RouteMiddleware middleware="auth"><HomePage /></RouteMiddleware>
    },
    {
        path: '/archives',
        element: <RouteMiddleware middleware="auth"><ArchivedPage /></RouteMiddleware>
    },
    {
        path: '/notes/new',
        element: <RouteMiddleware middleware="auth"><AddPage /></RouteMiddleware>
    },
    {
        path: '/notes/:id',
        element: <RouteMiddleware middleware="auth"><DetailPage /></RouteMiddleware>
    },
    {
        path: '/login',
        element: <RouteMiddleware middleware="guest"><LoginPage /></RouteMiddleware>
    },
    {
        path: '/register',
        element: <RouteMiddleware middleware="guest"><RegisterPage /></RouteMiddleware>
    },
    {
        path: '*',
        element: <NotFound />
    }
])

export default Routes
