import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import App from './App'

import './styles/style.css';
import './styles/responsive.css';
import 'react-toastify/dist/ReactToastify.min.css';
import 'react-loading-skeleton/dist/skeleton.css'

const root = createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
