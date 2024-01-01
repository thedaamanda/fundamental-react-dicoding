import React, { useState } from 'react';

function useLocale() {
    const [locale, setLocale] = useState('id');

    const changeLocale = (val) => {
        localStorage.setItem('locale', val);
        setLocale(val);
    };

    React.useEffect(() => {
        const localLocale = localStorage.getItem('locale');
        localLocale && changeLocale(localLocale);
    }, [locale]);

    return [locale, changeLocale];
}

export default useLocale;
