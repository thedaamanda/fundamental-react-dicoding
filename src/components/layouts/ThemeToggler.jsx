import React from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';
import useTheme from '../../hooks/useTheme';

function ThemeToggler() {
    const [theme, changeTheme] = useTheme();

    return (
        <button type='button' className='theme-toggler' onClick={() => changeTheme(theme === 'light' ? 'dark' : 'light')}>
            {theme === 'light' ? <FiMoon /> : <FiSun />}
        </button>
    );
}

export default ThemeToggler;
