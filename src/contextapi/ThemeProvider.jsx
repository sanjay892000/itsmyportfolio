import React, { useState } from 'react'
import { themeContext } from './themeContext';

const ThemeProvider = ({ children }) => {

    const [theme, setTheme] = useState('dark');

    const lightMode = () => {
        setTheme('light');
    }

    const darkMode = () => {
        setTheme('dark');
    }

    return (
        <themeContext.Provider value={{theme, lightMode, darkMode}}>
            {children}
        </themeContext.Provider>
    )
}

export default ThemeProvider
