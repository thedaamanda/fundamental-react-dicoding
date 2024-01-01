import React, { useContext } from 'react'
import { MdGTranslate } from 'react-icons/md';
import useLocale from '../../hooks/useLocale'
import LocaleContext from '../../contexts/LocaleContext'

function LangToggler() {
    const { locale, changeLocale } = useContext(LocaleContext);

    console.log(locale);

    return (
        <button
            type='button'
            title={locale === 'id' ? 'Indonesia' : 'English'}
            onClick={() => changeLocale()}
            className='lang-toggler'
        >
            <MdGTranslate />
        </button>
    );
}

export default LangToggler;
