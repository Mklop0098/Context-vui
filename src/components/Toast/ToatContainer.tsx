import ReactDOM from 'react-dom';
import './style.css';
import { useToast } from '../../contexts/ToastContext';
import { Toast } from './Toast';
import { useEffect } from 'react';

export const ToastContainer = () =>
{
    const { toast } = useToast();

    const toastDOM: HTMLElement = document.getElementById('toast-root') as HTMLElement;
    return ReactDOM.createPortal(
        <div className="toast__container">
            {
                toast.map((item, key) => (
                    <>
                        {
                            item.id && (
                                <Toast
                                    id={item.id}
                                    type={item.type}
                                    message={item.message}
                                />
                            )
                        }
                    </>
                    
                ))
            }
        </div>,
        toastDOM,
            
    );

    return <></>;

};

    
