import { PropsWithChildren, useEffect, useRef, useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import './style.css';
import { Button } from '../Button';
import { useModal } from '../../contexts/ModalContext';
import { useLanguage } from '../../contexts/LanguageContext';
import { MdOutlineArrowRight } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { LeftSite } from '../Modal/LeftSite';
import { RightSite } from '../Modal/RightSite';
import { BsGearFill } from 'react-icons/bs';

export const DefaultLayout:React.FC<PropsWithChildren> = (props) =>
{
    const { showModal, hideModal } = useModal();
    const { t } = useLanguage();

    useEffect(() =>
    {
        function handleWindowResize()
        {
            window.innerWidth > 1200 && hideModal();
        }

        window.addEventListener('resize', handleWindowResize);

        return () =>
        {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    const handleClick = () =>
    {
        showModal({
            toggle: true,
            body: <LeftSite />,
                
        });
    };

    const handleToggleMenu = () =>
    {
        showModal({
            toggle: true,
            body: <RightSite />,
                
        });
    };
    return (
        <div className='layout-container'>
            <div className='components-container'>
                <div className='components__header'>
                    HELLO
                </div>
                <div className='components__list'>
                    <span className='list__header'>
                        {`${t('THÀNH PHẦN')}`}
                    </span>
                    <ul className='list__content'>
                        
                        <Link to={'/modal'}>
                            <MdOutlineArrowRight />
                            <li>Modal</li>
                        </Link>
                        
                        <Link to={'/toast'}>
                            <MdOutlineArrowRight />
                            <li>Toast</li>
                        </Link>
                        <Link to={'/upload'}>
                            <MdOutlineArrowRight />
                            <li>UploadImage</li>
                        </Link>
                        
                        <Link to={'/select'}>
                            <MdOutlineArrowRight />
                            <li>AdvanceSelect</li>
                        </Link>
                        

                    </ul>
                </div>
            </div>
            <div className='component-detail'>

                <div className='component__header'>
                    <div className='component__header-icon'>
                        <div
                            className='menu-toggle'
                            onClick={handleToggleMenu}
                        >
                            <GiHamburgerMenu />
                        </div>
                        <span>HELLO</span>
                    </div>
                    <div style={{ paddingRight: '20px', display: 'flex', alignItems: 'center' }}>
                        <BsGearFill
                            color='var(--color)'
                            onClick={handleClick}
                        />
                    </div>
                    
                </div>
                <div className='children'>{props.children}</div>

            </div>
        </div>
    );
};
