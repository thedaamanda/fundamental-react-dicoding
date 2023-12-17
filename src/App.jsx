import React from 'react';
import { Link, Navigate, Route, Routes } from 'react-router-dom';
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';

import IndexPage from './pages';

function App() {
    return (
        <>
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<IndexPage />} />
                </Routes>
            </main>
            <Footer />
        </>
    )
}

export default App;
