

import './style.css';
import { useModal } from '../../contexts/ModalContext';
import { useLanguage } from '../../contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { MdOutlineArrowRight } from 'react-icons/md';
import { pages } from '../../data';


export const RightSite = () =>
{
    const { hideModal } = useModal();

    const { t } = useLanguage();

    
    return (
        <div className='right-modal'>
            <div className='right-modal__container'>
                
                <div className='list__header-state'>
                    <div className='components__header'>
                        HELLO
                    </div>
                    <div className='components__list'>
                        <span className='list__header'>
                            {`${t('THÀNH PHẦN')}`}
                        </span>
                        <ul
                            className='list__content'
                            onClick={hideModal}
                        >
                            {
                                pages.map((page, key) => (
                                    <Link
                                        key={key}
                                        to={page.link}
                                    >
                                        <MdOutlineArrowRight />
                                        <li>{page.name}</li>
                                    </Link>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};
