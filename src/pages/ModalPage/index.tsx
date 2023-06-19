import { BsGearFill } from 'react-icons/bs';
import { Button } from '../../components/Button';
import { useModal } from '../../contexts/ModalContext';
import { useTheme } from '../../contexts/ThemeContext';
import './style.css';
import { useEffect, useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

export const ModalPage = () =>
{

    const { showModal, hideModal } = useModal();
    const { theme, setTheme } = useTheme();
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
