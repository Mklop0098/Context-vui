
import { Button } from '../../components/Button';
import { useModal } from '../../contexts/ModalContext';
import './style.css';
import { useLanguage } from '../../contexts/LanguageContext';

export const ModalPage = () =>
{

    const { showModal } = useModal();
    const { t } = useLanguage();


    const handleClick = () =>
    {
        showModal({
            toggle: true,
            root: 'modal-root',
        });
    };
    return (
        <div className={'modal-page'}>
            <div className='modal-container'>
                <h1>Modal</h1>
                <span>{`${t('Thành phần phương thức cung cấp nền tảng vững chắc để tạo hộp thoại, cửa sổ bật lên, hộp đèn hoặc bất kỳ thứ gì khác.')}`}</span>
            </div>
            <div>
                <h3>{`${t('Phương thức cơ bản')}`}</h3>
                <Button
                    className='warn'
                    text='thông báo'
                    onClick={handleClick}
                />
            </div>
        </div>
    );
};
