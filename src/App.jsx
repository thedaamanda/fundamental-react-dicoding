import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';
import { ToastContainer } from 'react-toastify';

import HomePage from './pages/HomePage';
import ArchivedPage from './pages/ArchivedPage';
import AddPage from './pages/AddPage';
import DetailPage from './pages/DetailPage';
import NotFound from './pages/NotFound';

function App() {
    return (
        <>
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/archives" element={<ArchivedPage />} />
                    <Route path="/notes/new" element={<AddPage />} />
                    <Route path="/notes/:id" element={<DetailPage />} />
                    <Route path="*" element={<NotFound/>} />
                </Routes>
            </main>
            {/* <Footer /> */}
            <ToastContainer
                position="top-right"
                autoClose={1500}
                hideProgressBar={true}
                newestOnTop={false}
                rtl={false}
                pauseOnFocusLoss
                pauseOnHover
                theme="colored" />
        </>
    )
}

export default App;
