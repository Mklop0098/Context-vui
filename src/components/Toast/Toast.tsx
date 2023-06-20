/* eslint-disable no-unused-vars */

import './style.css';
import { MdCancel } from 'react-icons/md';
import { styleToast } from '../../data';
import { useToast } from '../../contexts/ToastContext';
import { useEffect } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

type ToastProps = {
    id: number,
    type: string,
    message: string,
}


export const Toast:React.FC<ToastProps> = (props) =>
{
    const { id, type, message } = props;
    const { removeToast } = useToast();
    const { t } = useLanguage();

    useEffect(() =>
    {

        setTimeout(() =>
        {
            removeToast(id);
        }, 3000);
    }, []);

    return (
        <div
            className={`toast-type ${type + '-toast'} slide-toast-left`}
        >
            <div className='toast-type__content'>
                <i className={styleToast[type as keyof Object] as unknown as string} />
                <span>{`${t(message)}`}</span>
            </div>
            <div
                className='close-btn'
                onClick={() => removeToast(id)}
            ><MdCancel color='white' />
            </div>
        </div>
    );
};

