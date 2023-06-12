
import './style.css';
import { MdCancel } from 'react-icons/md';
import ReactDOM from 'react-dom';

type ModalProps = {
    root: string,
    toggle: boolean,
    onClick: () => void,
    title?: string,
    body: any,
    footer?: boolean,
    width: number,
    height: number,
    type: string
}

export const Modal:React.FC<ModalProps> = (props) =>
{
    const { root, toggle, title, body, footer, width, height, type } = props;
    const { onClick } = props;

    console.log(title === undefined ? true : false);

    if (toggle && root)
    {
        const el: HTMLElement = document.getElementById(root) as HTMLElement;
        return ReactDOM.createPortal(
            <div className='enlange__container'>
                <div
                    className='enlange-overlay'
                    onClick={onClick}
                />
                <div
                    className="enlange-wrapper"
                    style={{ width: `${width}%`, height: `${height}%` }}
                >
                    <div
                        className="enlange-picture"
                        style={{ width: `${width}%`, height: `${height}%`, padding: `${type === 'enlarge' && '12px'}` }}
                    >
                        <div hidden={title === undefined}>
                            <div
                                className='modal-block__header'
                                
                            >
                                <span>{title}</span>
                                <MdCancel
                                    color='var(--color)'
                                    onClick={onClick}
                                />
                            </div>
                        </div>
                        {
                            <div className='modal-block__body-block'>{body}</div>
                    
                        }
                        <div
                            className='modal-block__footer'
                            hidden={footer === undefined || footer === false}
                        >
                            <div className='modal__handler'>
                                <button
                                    className='modal__handler--default'
                                    onClick={onClick}
                                >Cancel
                                </button>
                                <button
                                    className='model__handler--primary'
                                    onClick={onClick}
                                >Confirm
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>,
            el,
        );
    }
    

    else {return <></>;}
};
