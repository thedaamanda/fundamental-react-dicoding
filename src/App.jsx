import React from 'react';
import { Link, Navigate, Route, Routes } from 'react-router-dom';
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';

import HomePage from './pages/HomePage';
import AddPage from './pages/AddPage';

function App() {
    return (
        <>
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/notes/new" element={<AddPage />} />
                </Routes>
            </main>
            <Footer />
        </>
    )
}

export default App;
