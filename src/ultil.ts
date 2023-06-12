import React from 'react';


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

