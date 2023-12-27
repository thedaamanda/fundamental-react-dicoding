import React, { useEffect, useMemo, useState } from 'react'
import { getUserLogged, getAccessToken } from './utils/network-data'
import Header from './components/layouts/Header';
import { ToastContainer } from 'react-toastify';
import Routes from './routes'
import AuthContext from './contexts/AuthContext'

// function App() {
//     return (
//         <>
//             <Header />
//             <main>
//                 <Routes>
//                     <Route path="/" element={<HomePage />} />
//                     <Route path="/login" element={<LoginPage />} />
//                     <Route path="/register" element={<RegisterPage />} />
//                     <Route path="/archives" element={<ArchivedPage />} />
//                     <Route path="/notes/new" element={<AddPage />} />
//                     <Route path="/notes/:id" element={<DetailPage />} />
//                     <Route path="*" element={<NotFound/>} />
//                 </Routes>
//             </main>
//             <ToastContainer
//                 position="top-right"
//                 autoClose={1500}
//                 hideProgressBar={true}
//                 newestOnTop={false}
//                 rtl={false}
//                 pauseOnFocusLoss
//                 pauseOnHover
//                 theme="colored" />
//         </>
//     )
// }

function App() {
    const [auth, setAuth] = React.useState(null);
    // const [locale, setLocale] = useState('id')
    // const [theme, changeTheme] = useTheme()
    const [loading, setLoading] = React.useState(true);

    // const [authedUser, setAuthedUser] = React.useState(null);
    // const [initializing, setInitializing] = React.useState(true);
    // const [locale, setLocale] = React.useState(localStorage.getItem('locale') || 'id');
    // const [theme, setTheme] = React.useState(localStorage.getItem('theme') || 'dark');

    // const toggleLocale = () => {
    //     localStorage.setItem('locale', (locale === 'id' ? 'en' : 'id'))
    //     setLocale((prevLocale) => (prevLocale === 'id' ? 'en' : 'id'))
    //   }

    //   const localeContextValue = useMemo(() => ({
    //     locale,
    //     toggleLocale
    //   }), [locale])

      const authContextValue = React.useMemo(() => ({
        auth,
        setAuth
      }), [auth])

    //   const themeContextValue = useMemo(() => ({
    //     theme,
    //     changeTheme
    //   }), [authedUser])

    React.useEffect(() => {
        async function fetchUserLogged() {
            try {
                const { data } = await getUserLogged();
                setAuth(data);
                setLoading(false);
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        }

        fetchUserLogged();

        // getUserLogged()
        //     .then((res) => {
        //         if(!res.error) {
        //             setAuth(res.data);
        //         } else {
        //             setAuth(null);
        //         }
        //         setLoading(false);
        //     })
        //     .catch((err) => {
        //         alert(err.message);
        //         setLoading(false);
        //     });
    }, []);

    return (
        <AuthContext.Provider value={authContextValue}>
            <Header />
            <main>
                <Routes />
            </main>
            <ToastContainer
                position="top-right"
                autoClose={1500}
                hideProgressBar={true}
                newestOnTop={false}
                rtl={false}
                pauseOnFocusLoss
                pauseOnHover
                theme="colored" />
        </AuthContext.Provider>
    )
}

export default App;
