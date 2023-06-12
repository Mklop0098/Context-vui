import React, { PropsWithChildren, createContext, useContext, useEffect, useState } from 'react';
import { ThemeContextRetrun } from './type';

export const ThemeContext = createContext<ThemeContextRetrun>({} as ThemeContextRetrun);


export const useTheme = (): ThemeContextRetrun =>
{
    return useContext(ThemeContext);
};

export const ThemeContextProvider: React.FC<PropsWithChildren> = (props) =>
{
    const [theme, setTheme] = useState<string>('theme-light');

    useEffect(() =>
    {
        const currentTheme = localStorage.getItem('currentTheme');
        if (currentTheme)
        {
            setTheme(currentTheme);
        }
    }, []);

    useEffect(() =>
    {
        if (theme === 'theme-light')
        {
            document.body.classList.add('theme-light');
            document.body.classList.remove('theme-dark');
        }
        else
        {
            document.body.classList.remove('theme-light');
            document.body.classList.add('theme-dark');
        }

        localStorage.setItem('currentTheme', theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {props.children}
        </ThemeContext.Provider>
    );
};
