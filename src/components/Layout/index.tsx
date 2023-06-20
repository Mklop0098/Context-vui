import { PropsWithChildren, useEffect } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import './style.css';
import { useModal } from '../../contexts/ModalContext';
import { RightSite } from './RightSite';
import { BsGearFill } from 'react-icons/bs';
import { LeftSite } from './LeftSite';

export const DefaultLayout:React.FC<PropsWithChildren> = (props) =>
{
    const { showModal, hideModal } = useModal();

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
            position: 'left',
        });
    };

    const handleToggleMenu = () =>
    {
        showModal({
            toggle: true,
            body: <RightSite />,
            position: 'right',
                
        });
    };
    return (
        <div className='layout-container'>
            <div className='components-container'>
                <RightSite />
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
