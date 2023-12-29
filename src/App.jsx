import React from 'react'
import { getUserLogged } from './utils/network-data'
import Header from './components/layouts/Header';
import { ToastContainer } from 'react-toastify';
import Routes from './routes'
import AuthContext from './contexts/AuthContext'
import ThemeContext from './contexts/ThemeContext'
import useTheme from './hooks/useTheme'

function App() {
    const [theme, changeTheme] = useTheme();
    const [auth, setAuth] = React.useState(null);
    // const [locale, setLocale] = useState('id')
    const [loading, setLoading] = React.useState(true);

    // const toggleLocale = () => {
    //     localStorage.setItem('locale', (locale === 'id' ? 'en' : 'id'))
    //     setLocale((prevLocale) => (prevLocale === 'id' ? 'en' : 'id'))
    //   }

    //   const localeContextValue = useMemo(() => ({
    //     locale,
    //     toggleLocale
    //   }), [locale])

    const themeContextValue = React.useMemo(() => ({
        theme,
        changeTheme
    }), [theme])

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
        </ThemeContext.Provider>
    )
}

export default App;
