import React from 'react';
import { createRoot } from 'react-dom/client';
import Header from './components/layouts/Header';
import NoteApp from './components/NoteApp';
import Footer from './components/layouts/Footer';

// styling
import './styles/style.css';
import './styles/responsive.css';

const root = createRoot(document.getElementById('root'));
root.render(
    <>
        <Header />
        <NoteApp />
        <Footer />
    </>
);
