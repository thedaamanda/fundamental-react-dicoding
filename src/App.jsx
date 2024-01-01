import React from 'react';
import { getUserLogged } from './utils/network-data'
import Header from './components/layouts/Header';
import { ToastContainer } from 'react-toastify';
import Routes from './routes';
import ThemeContext from './contexts/ThemeContext';
import LocaleContext from './contexts/LocaleContext';
import AuthContext from './contexts/AuthContext';
import useTheme from './hooks/useTheme';
import useLocale from './hooks/useLocale';

function App() {
    const [theme, changeTheme] = useTheme();
    const [locale, changeLocale] = useLocale();
    const [auth, setAuth] = React.useState(null);
    const [loading, setLoading] = React.useState(true);

    const localeContextValue = React.useMemo(() => ({
        locale,
        changeLocale
    }), [locale]);

    const themeContextValue = React.useMemo(() => ({
        theme,
        changeTheme
    }), [theme]);

    const authContextValue = React.useMemo(() => ({
        auth,
        setAuth
    }), [auth]);

    React.useEffect(() => {
        getUserLogged().then(({ data }) => {
            setAuth(data);
            setLoading(false);
        });
    }, []);

    return (
        <ThemeContext.Provider value={themeContextValue}>
            <LocaleContext.Provider value={localeContextValue}>
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
            </LocaleContext.Provider>
        </ThemeContext.Provider>
    )
}

export default App;
