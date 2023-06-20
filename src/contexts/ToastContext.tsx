import { PropsWithChildren, createContext, useContext, useState } from 'react';
import { ToastHookReturns, ToastType } from './type';

export const ToastContext = createContext<ToastHookReturns>({} as ToastHookReturns);


export const useToast = (): ToastHookReturns =>
{
    return useContext(ToastContext);
};


export const ToastContextProvider: React.FC<PropsWithChildren> = (props) =>
{
    const [toast, setToast] = useState<ToastType[]>([]);

    const addToast = (newToast: ToastType) =>
    {
        const toastId = Date.now();
        setToast([...toast, { id: toastId, ...newToast }]);
       
    };

    const removeToast = (id: number) =>
    {
        setToast((toast) => toast.filter(e => e.id !== id));
    };

    return (
        <ToastContext.Provider value={{ toast, addToast, removeToast }}>
            {props.children}
        </ToastContext.Provider>
    );
};
