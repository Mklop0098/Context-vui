/* eslint-disable no-unused-vars */

import './style.css';
import { MdCancel } from 'react-icons/md';
import { styleToast } from '../../data';
import { useToast } from '../../contexts/ToastContext';
import { useEffect } from 'react';

type ToastProps = {
    id: number,
    type: string,
    message: string
}


export const Toast:React.FC<ToastProps> = (props) =>
{
    const { id, type, message } = props;
    const { removeToast } = useToast();


    useEffect(() =>
    {
        setTimeout(() =>
        {
            removeToast(id);
        }, 3000);
    }, []);

    return (
        <div className={`toast-type ${type + '-toast'}`}>
            <div className='toast-type__content toast__type--appear'>
                <i className={styleToast['warn']} />
                <span>{message}</span>
            </div>
            <div
                className='close-btn'
                onClick={() => removeToast(id)}
            ><MdCancel color='white' />
            </div>
        </div>
    );
};

