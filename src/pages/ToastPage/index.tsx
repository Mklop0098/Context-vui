import { Button } from '../../components/Button';
import { ToastContainer } from '../../components/Toast/ToatContainer';
import { useLanguage } from '../../contexts/LanguageContext';
import { useToast } from '../../contexts/ToastContext';
import './style.css';

export const ToastPage = () =>
{
    const { addToast } = useToast();
    const { t } = useLanguage();

    return (
        <div className="toast-page__container">
            
            <h1>Toast</h1>
            <span>{`${t('Toast hiển thị một thông báo ngắn, quan trọng theo cách thu hút sự chú ý của người dùng mà không làm gián đoạn tác vụ của người dùng.')}`}</span>
            <h3>{`${t('Toast cơ bản')}`}</h3>
            <span>{`${t('Toast đưa ra ba mức độ nghiêm trọng đặt biểu tượng và màu sắc đặc biệt.')}`}</span>
            <div className='toast-container'>
                <Button
                    className='error'
                    text='lỗi'
                    onClick={() => addToast({
                        type: 'error',
                        message: 'Đây là tin nhắn báo lỗi',
                    })}
                />
                <Button
                    className='success'
                    text='thành công'
                    onClick={() => addToast({
                        type: 'success',
                        message: 'Đây là tin nhắn thành công',
                    })}
                        
                />
                <Button
                    className='warn'
                    text='cảnh báo'
                    onClick={() => addToast({
                        type: 'warn',
                        message: 'Đây là tin nhắn cảnh báo',
                    })}
                />
                
            </div>
            <ToastContainer />
        </div>
    );
};
