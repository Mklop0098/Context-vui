
import './style.css';
import { MdCancel } from 'react-icons/md';
import ReactDOM from 'react-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { useModal } from '../../contexts/ModalContext';

type ModalProps = {
    root: string,
    toggle: boolean,
    onClick: () => void,
    title?: string,
    body?: any,
    footer?: boolean,
    width: number,
    height: number,
    type: string,
    header?: boolean
}

export const Modal:React.FC<ModalProps> = (props) =>
{
    const { root, toggle, title, body, footer = true, width, height, type, header = true } = props;
    const { hideModal } = useModal();
    const { onClick } = props;
    const { t } = useLanguage();

    console.log(props);

    if (toggle && root)
    {
        const el: HTMLElement = document.getElementById(root) as HTMLElement;
        return ReactDOM.createPortal(
            <div className='modal-content'>
                <div
                    className='modal-overall'
                    onClick={onClick}
                />
                {
                    body
                        ? body
                        : (
                            <div className='modal-window'>
                                <div className='modal-window__container'>
                                    <div
                                        className='modal-window__header'
                                        hidden={!header}
                                    >
                                        <span>{`${t('Tiêu đề')}`}</span>
                                    </div>
                                    <div className='modal-window__body'>
                                        <span>{`${t('Nội dung')}`}</span>
                                    </div>
                                    <div
                                        className='modal-window__footer'
                                        hidden={!footer}
                                    >
                                        <button
                                            className='default'
                                            onClick={hideModal}
                                        >{`${t('Hủy')}`}
                                        </button>
                                        <button
                                            className='primary'
                                            onClick={hideModal}
                                        >{`${t('Xác nhận')}`}
                                        </button>

                                    </div>
                                </div>
                            </div>
                        )
                }
            </div>,
            el,
        );
    }
    

    else {return <></>;}
};
