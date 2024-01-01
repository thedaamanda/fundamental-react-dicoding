import React from 'react';
import { MdGTranslate } from 'react-icons/md';
import useLocale from '../../hooks/useLocale'

function LangToggler() {
    const [locale, changeLocale] = useLocale();

    return (
        <button
            type='button'
            title={locale === 'id' ? 'Indonesia' : 'English'}
            onClick={() => changeLocale(locale === 'id' ? 'en' : 'id')}
            className='lang-toggler'
        >
            <MdGTranslate />
        </button>
    );
}

export default LangToggler;
