import { PropsWithChildren, createContext, useContext, useEffect, useState } from 'react';
import en from '../../src/language/en.json';


type LanguageContextProviderReturn = {
    t: (text: string) => void,
    setCurrentLanguage: (language: string) => void,
    language: string
};


export const LanguageContext = createContext<LanguageContextProviderReturn>({} as LanguageContextProviderReturn);

export const useLanguage = (): LanguageContextProviderReturn =>
{
    return useContext(LanguageContext);
};


export const LanguageContextProvider: React.FC<PropsWithChildren> = (props) =>
{
    const [language, setLanguage] = useState<string>(localStorage.getItem('lang') || 'VN');

    const t = (text: string) =>
    {

        const result: any = language !== 'VN' ? en[language as keyof Object][text as keyof Object] : text;

        return result;
        
    };

    const setCurrentLanguage = (language: string) =>
    {
        localStorage.setItem('lang', language);
        setLanguage(language);
    };

    return (
        <LanguageContext.Provider value={{ t, setCurrentLanguage, language }}>
            {props.children}
        </LanguageContext.Provider>
    );
};
