import { Button } from '../../components/Button';
import { ToastContainer } from '../../components/Toast/ToatContainer';
import { useToast } from '../../contexts/ToastContext';
import './style.css';

export const ToastPage = () =>
{
    const { addToast } = useToast();

    return (
        <div className="toast-page__container">
            <Button
                className='error'
                text='lỗi'
                onClick={() => addToast({
                    type: 'error',
                    message: 'This is error message',
                })}
            />
            <Button
                className='success'
                text='thành công'
                onClick={() => addToast({
                    type: 'success',
                    message: 'This is success message',
                })}
                        
            />
            <Button
                className='success'
                text='thành công'
                onClick={() => addToast({
                    type: 'success',
                    message: 'This is success message',
                })}
            />
            <ToastContainer />
        </div>
    );
};
