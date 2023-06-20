
import './style.css';
import { useModal } from '../../contexts/ModalContext';
import { FaSun } from 'react-icons/fa';
import { IoMoon } from 'react-icons/io5';
import { useTheme } from '../../contexts/ThemeContext';
import { useLanguage } from '../../contexts/LanguageContext';
import { AdvanceSelect, OptionType } from '../AdvanceSelect';


export const LeftSite = () =>
{
    const { setTheme } = useTheme();
    const { hideModal } = useModal();
    const { t, setCurrentLanguage, language, languageAvailable } = useLanguage();

    const onChange = (value: OptionType[]) =>
    {
        if (value.length > 0) {setCurrentLanguage(value[0]);}
    };
    
    console.log(language);

    return (
        <div className='left-modal'>
            <div className='left-modal__container'>
                <div className='left-modal__header'>
                    <span
                        className='list__header'
                        style={{ padding: 0 }}
                    >{`${t('CÀI ĐẶT')}`}
                    </span>
                    <i
                        className="fa-solid fa-xmark"
                        style={{ color: 'var(--color)', cursor: 'pointer' }}
                        onClick={hideModal}
                    />

                </div>
                <div className='list__header-state'>
                    <span className='list__header'>{`${t('CHẾ ĐỘ')}`}</span>
                    <div className='mode-state'>
                        <div className='mode-state__state'>
                            <FaSun
                                color='var(--dropdown-outline)'
                                fontSize={20}
                                onClick={() => {setTheme('theme-light');}}
                            />
                            <span>{`${t('SÁNG')}`}</span>
                        </div>
                        <div className='mode-state__state'>
                            <IoMoon
                                fontSize={20}
                                color='var(--dropdown-outline)'
                                onClick={() => setTheme('theme-dark')}
                            />
                            <span>{`${t('TỐI')}`}</span>
                        </div>
                    </div>
                </div>
                <div className='list__header-state'>
                    <span className='list__header'>{`${t('NGÔN NGỮ')}`}</span>
                    <div style={{ width: '150px' }}>
                        <AdvanceSelect
                            options={languageAvailable}
                            placeholder={language}
                            onChange={onChange}
                        />
                    </div>

                </div>
            </div>
        </div>
    );
};
