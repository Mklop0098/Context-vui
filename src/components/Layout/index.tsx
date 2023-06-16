import { PropsWithChildren, useRef, useState } from 'react';
import { BsGearFill, BsPlus } from 'react-icons/bs';
import './style.css';
import { Button } from '../Button';
import { useModal } from '../../contexts/ModalContext';
import { FaSun } from 'react-icons/fa';
import { IoMoon } from 'react-icons/io5';
import { useTheme } from '../../contexts/ThemeContext';
import { flagIcon } from '../../data';
import { useLanguage } from '../../contexts/LanguageContext';
import { MdOutlineArrowRight } from 'react-icons/md';
import { Link } from 'react-router-dom';

export const DefaultLayout:React.FC<PropsWithChildren> = (props) =>
{
    const { showModal, hideModal } = useModal();
    // const [curren, setCurrent] = useState('VN');
    const { theme, setTheme } = useTheme();
    const { t, setCurrentLanguage, language, languageAvailable } = useLanguage();
    const [toggle, setToggle] = useState(false);

    const handleClick = () =>
    {
        console.log(language);
        showModal({
            toggle: true,
            body: (
                <div className='left-modal'>
                    <div className='left-modal__container'>
                        <div className='left-modal__header'>
                            <span>Setting</span>
                            <BsGearFill onClick={hideModal} />

                        </div>
                        <div className='list__header-state'>
                            <span className='list__header'>Mode</span>
                            <div className='mode-state'>
                                <div className='mode-state__state'>
                                    <FaSun
                                        color='var(--dropdown-outline)'
                                        fontSize={20}
                                        onClick={() => {setTheme('theme-light');}}
                                    />
                                    <span>Light</span>
                                </div>
                                <div className='mode-state__state'>
                                    <IoMoon
                                        fontSize={20}
                                        color='var(--dropdown-outline)'
                                        onClick={() => setTheme('theme-dark')}
                                    />
                                    <span>Dark</span>
                                </div>
                            </div>
                        </div>
                        <div className='list__header-state'>
                            <span className='list__header'>Language</span>
                            <select
                                onChange={(e) => setCurrentLanguage(e.target.value)}
                            >
                                {
                                    languageAvailable.map((item, key) => (
                                        <option
                                            key={key}
                                            value={item.language}
                                        >{item.language}
                                        </option>
                                    ))
                                }
                            </select>
                        </div>
                    </div>
                </div>
            ),
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
                        Components
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
                        
                        <li
                            style={{ display: 'flex', alignItems: 'center' }}
                            onClick={() => setToggle(!toggle)}
                        >
                            <BsPlus />
                            <span>AdvanceSelect</span>
                        </li>
                        <ul
                            className='list__content sub-content'
                            hidden={!toggle}
                        >
                            <Link to={'/select'}>
                                <MdOutlineArrowRight />
                                <li>Default</li>
                            </Link>
                            <Link to={'/select-disable'}>
                                <MdOutlineArrowRight />
                                <li>Disable</li>
                            </Link>
                            <Link to={'/select-multiple'}>
                                <MdOutlineArrowRight />
                                <li>Multiple</li>
                            </Link>
                        </ul>
                        

                    </ul>
                </div>
            </div>
            <div className='component-detail'>

                <div className='component__header'>
                    <span className='component__header-icon'>
                        HELLO
                    </span>
                    <Button
                        className='error'
                        text='option'
                        onClick={handleClick}
                    />
                    
                </div>
                {props.children}

            </div>
        </div>
    );
};
