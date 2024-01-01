import React, { useState } from 'react';

function useLocale() {
    const [locale, setLocale] = useState('id');

    const changeLocale = () => {
        localStorage.setItem('locale', (locale === 'id' ? 'en' : 'id'));
        setLocale((prevLocale) => (prevLocale === 'id' ? 'en' : 'id'));
    };

    React.useEffect(() => {
        const localLocale = localStorage.getItem('locale');
        localLocale && setLocale(localLocale);
    });

    return [locale, changeLocale];
}

export default useLocale;
