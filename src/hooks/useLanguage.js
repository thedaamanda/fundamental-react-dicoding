import { useContext } from 'react';
import LocaleContext from '../contexts/LocaleContext';
import language from '../utils/language';

function useLanguage(page) {
    const { locale } = useContext(LocaleContext);
    return language[`${page}Page`][locale];
}

export default useLanguage;
