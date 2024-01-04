import React, { useState } from 'react';

function useTheme() {
    const [theme, setTheme] = useState('light');

    const changeTheme = (val) => {
        setTheme(val);
        const root = window.document.documentElement;
        root.setAttribute('data-theme', val);
        localStorage.setItem('theme', val);
    };

    React.useEffect(() => {
        const localTheme = localStorage.getItem('theme');
        localTheme && changeTheme(localTheme);
    }, [theme]);

    return [theme, changeTheme];
}

export default useTheme;
