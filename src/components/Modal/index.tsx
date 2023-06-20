
import './style.css';
import ReactDOM from 'react-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { useModal } from '../../contexts/ModalContext';
import { useRef } from 'react';

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
    header?: boolean,
    position?: string
}

export const Modal:React.FC<ModalProps> = (props) =>
{
    const { onClick } = props;
    const { root, toggle, title, body, footer = true, width, height, type, header = true, position } = props;
    
    const { hideModal } = useModal();
    const { t } = useLanguage();

    const ref = useRef<any>();
    const leftRef = useRef<any>();
    const rightRef = useRef<any>();


    const handleHideModal = () =>
    {
        setTimeout(() =>
        {
            hideModal();

        }, 230);
        if (ref.current)
        {
            ref.current.classList.remove('scale-up');
            ref.current.classList.add('scale-down');
        }
        if (leftRef.current)
        {
            leftRef.current.classList.remove('slide-modal-left');
            leftRef.current.classList.add('slide-modal-right');
        }
        if (rightRef.current)
        {
            rightRef.current.classList.remove('slide-right-modal-right');
            rightRef.current.classList.add('slide-right-modal-left');
        }
        
       
    };

    const renderBody = (position: string) =>
    {
        switch (position)
        {
            case 'center': return (
                <div
                    ref={ref}
                    className={'modal-window scale-up'}
                    style={{ width: '60%', height: '60%' }}
                >
                    {body}
                </div>
            );

            case 'left': return (
                <div
                    ref={leftRef}
                    className={'body-container slide-modal-left'}
                    style={{ right: '0' }}
                >{body}
                </div>
            );

            case 'right': return (
                <div
                    ref={rightRef}
                    style={{ left: '0' }}
                    className={'body-container slide-right-modal-right'}
                >{body}
                </div>
            );
        }
    };

    if (toggle && root)
    {
        const el: HTMLElement = document.getElementById(root) as HTMLElement;
        return ReactDOM.createPortal(
            <div className='modal-content'>
                <div
                    className='modal-overall'
                    onClick={handleHideModal}
                />
                {
                    body
                        ? position && renderBody(position)
                        : (
                            <div
                                ref={ref}
                                className={'modal-window scale-up'}
                                style={{ width: '300px', height: '200px' }}
                            >
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
                                            onClick={handleHideModal}
                                        >{`${t('Hủy')}`}
                                        </button>
                                        <button
                                            className='primary'
                                            onClick={onClick}
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
