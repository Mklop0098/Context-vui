import { PropsWithChildren, createContext, useContext, useState } from 'react';


type LanguageContextProviderReturn = {
    t: (text: string) => void,
    setCurrentLanguage: (language: string) => void,
    language: string,
    languageAvailable: LanguageAvailabeType[]
};

type LanguageAvailabeType = {
    language: string,
    flag: string
}

export const LanguageContext = createContext<LanguageContextProviderReturn>({} as LanguageContextProviderReturn);

export const useLanguage = (): LanguageContextProviderReturn =>
{
    return useContext(LanguageContext);
};


export const LanguageContextProvider: React.FC<PropsWithChildren> = (props) =>
{
    const [language, setLanguage] = useState<string>(localStorage.getItem('lang') || 'VN');

    const languageAvailable: LanguageAvailabeType[] = [
        {
            language: 'VN',
            flag: 'https://viblo.asia/images/vi-flag-32x48.png',
        },
        {
            language: 'EN',
            flag: 'https://viblo.asia/images/en-flag-32x48.png',
        },
        {
            language: 'CN',
            flag: 'https://viblo.asia/images/en-flag-32x48.png',
        },
        {
            language: 'JP',
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
    console.log(language);

    const setCurrentLanguage = (language: string) =>
    {
        setLanguage(language);

        localStorage.setItem('lang', language);
    };

    return (
        <LanguageContext.Provider value={{ t, setCurrentLanguage, language, languageAvailable }}>
            {props.children}
        </LanguageContext.Provider>
    );
};
