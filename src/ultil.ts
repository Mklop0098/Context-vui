import React from 'react';
import { OptionType } from './components/AdvanceSelect';


export const getBase64 = (file: any) =>
{
    return new Promise(resolve =>
    {
        let baseURL: any;
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () =>
        {
            baseURL = reader.result;
            resolve(baseURL);
        };
    });
};

export const getListValue = (defaultList: number[], options: OptionType[]): OptionType[] =>
{
    const result: OptionType[] = [];
    defaultList.map(id =>
    {
        options.map(options =>
        {
            if (+options.id === id)
            {
                result.push(options);
            }
        });
    });
    return result;
};
