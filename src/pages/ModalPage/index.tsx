import { BsGearFill } from 'react-icons/bs';
import { Button } from '../../components/Button';
import { useModal } from '../../contexts/ModalContext';
import { useTheme } from '../../contexts/ThemeContext';
import './style.css';

export const ModalPage = () =>
{

    const { showModal, hideModal } = useModal();
    const { theme, setTheme } = useTheme();


    const handleClick = () =>
    {
        showModal({
            toggle: true,
            body: (
                <div className='modal-window'>
                    <div className='modal-window__container'>
                        <div className='modal-window__header'>
                            <span>this is header</span>
                        </div>
                        <div className='modal-window__body'>
                            <span>this is body</span>
                        </div>
                        <div className='modal-window__footer'>
                            <button
                                className='default'
                                onClick={hideModal}
                            >Cancel
                            </button>
                            <button
                                className='primary'
                                onClick={hideModal}
                            >Confirm
                            </button>

                        </div>
                    </div>
                </div>
            ),
            root: 'modal-page-root',
        });
    };
    return (
        <div id={'modal-page-root'}>
            <Button
                className='warn'
                text='thông báo'
                onClick={handleClick}
            />
        </div>
    );
};
