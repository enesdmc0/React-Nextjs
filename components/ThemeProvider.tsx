"use client"
import React, {createContext, useContext, useState} from 'react';

const ThemeContext = createContext(true)
const ThemeUpdateContext = createContext((() => {}) as any )

interface Props {
    children: React.ReactNode
}

export const useTheme = () => {
    return useContext(ThemeContext)
}

export const useThemeUpdate = () => {
    return useContext(ThemeUpdateContext)
}

const ThemeProvider: React.FC<Props> = ({children}) => {
    const [darkTheme, setDarkTheme] = useState<boolean>(true)

    const toggleTheme = () => {
        setDarkTheme(prevDarkTheme => !prevDarkTheme)
    }

    return (
        <ThemeContext.Provider value={darkTheme}>
            <ThemeUpdateContext.Provider value={toggleTheme}>
                {children}
            </ThemeUpdateContext.Provider>
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
