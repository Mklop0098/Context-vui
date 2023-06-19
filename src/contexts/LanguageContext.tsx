import { PropsWithChildren, createContext, useContext, useState } from 'react';
import { OptionType } from '../components/AdvanceSelect';


type LanguageContextProviderReturn = {
    t: (text: string) => void,
    setCurrentLanguage: (language: OptionType) => void,
    language: string,
    languageAvailable: OptionType[]
};

export const LanguageContext = createContext<LanguageContextProviderReturn>({} as LanguageContextProviderReturn);

export const useLanguage = (): LanguageContextProviderReturn =>
{
    return useContext(LanguageContext);
};


export const LanguageContextProvider: React.FC<PropsWithChildren> = (props) =>
{
    const [language, setLanguage] = useState<string>(localStorage.getItem('lang') || 'VN');

    const languageAvailable: OptionType[] = [
        {
            id: '0',
            label: 'VN',
            flag: 'https://viblo.asia/images/vi-flag-32x48.png',
        },
        {
            id: '1',
            label: 'EN',
            flag: 'https://viblo.asia/images/en-flag-32x48.png',
        },
        {
            id: '2',
            label: 'JP',
            flag: 'https://viblo.asia/images/en-flag-32x48.png',
        },
        
    ];

    const t = (text: string) =>
    {
        if (language !== 'VN')
        {
            const dataJSON = require(`../language/${language.toLocaleLowerCase()}.json`);
            return dataJSON[text];
        }

        return text;
        
    };

    const setCurrentLanguage = (language: OptionType) =>
    {
        setLanguage(languageAvailable[+language.id].label);

        localStorage.setItem('lang', languageAvailable[+language.id].label);

    };

    return (
        <LanguageContext.Provider value={{ t, setCurrentLanguage, language, languageAvailable }}>
            {props.children}
        </LanguageContext.Provider>
    );
};
