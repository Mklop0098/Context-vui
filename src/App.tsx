
import { Fragment, ReactElement } from 'react';
import './App.css';
import { Button } from './components/Button';
import { useToast } from './contexts/ToastContext';
import { ToastContainer } from './components/Toast/ToatContainer';
import { useTheme } from './contexts/ThemeContext';
import { FaSun } from 'react-icons/fa';
import { IoMoon } from 'react-icons/io5';
import { useModal } from './contexts/ModalContext';
import { UploadImage } from './components/UploadImage/UploadImage';
import { AdvanceSelect, OptionType } from './components/AdvanceSelect';
import { useLanguage } from './contexts/LanguageContext';
import { flagIcon } from './data';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routes';
import { DefaultLayout } from './components/Layout';


function App(): ReactElement
{
    const { addToast } = useToast();
    const { theme, setTheme } = useTheme();
    const { showModal } = useModal();
    const { t, setCurrentLanguage, language, languageAvailable } = useLanguage();


    const handleClick = () =>
    {
        showModal({
            toggle: true,
            body: 'xasd',
            title: 'this is title',
            footer: true,
            width: 20,
            height: 25,
        });
    };

    const handleChange = (data: OptionType[]) =>
    {
        (data);
    };
    
 
    return (
        <Router>
            <div className="App">

                <DefaultLayout>
                    <Routes>
                        {publicRoutes.map((route, index) =>
                        {
                            const Page = route.component;
                            return (
                                <Route
                                    key={index}
                                    path={route.path}
                                    element={(
                                        <Page />
                                    )}
                                />
                            );
                        })}
                    </Routes>
                </DefaultLayout>
            </div>
        </Router>

    );
}

export default App;

{/* <div className='app__handler'>
                <div className='app__btn'>
                    <div>
                        
                        <Button
                            className='error'
                            text='lỗi'
                            onClick={() => addToast({
                                type: 'error',
                                message: 'This is error message',
                            })}
                        
                        />
                        <Button
                            className='success'
                            text='thành công'
                            onClick={() => addToast({
                                type: 'success',
                                message: 'This is success message',
                            })}
                        
                        />
                        <Button
                            className='warn'
                            text='thông báo'
                            onClick={handleClick}
                        />
                        <UploadImage
                            canEnlarge
                        />
                    </div>
                    <AdvanceSelect
                        options={test}
                        multiple
                        onChange={handleChange}
                    />


                    <div style={{ color: 'var(--color)', padding: '25px' }}>
                        
                        {`${t('tiêu đề')}`}
                        
                    </div>

                </div>
                <div className='toggle-btn'>
                    {
                        theme === 'theme-dark'
                            ? (
                                <FaSun
                                    color='#ffee58'
                                    fontSize={20}
                                    onClick={() => {setTheme('theme-light');}}
                                />
                            )
                            : (
                                <IoMoon
                                    fontSize={20}
                                    color="#616161"
                                    onClick={() => setTheme('theme-dark')}
                                />
                            )
                    }
                    <div className='language-option'>
                        <img
                            src={flagIcon[language as keyof Object] as unknown as string}
                            alt=""
                        />
                        <select
                            value={language}
                            onChange={(e) => setCurrentLanguage(e.target.value)}
                        >
                            {
                                languageAvailable.map((item, key) => (
                                    <option
                                        key={key}
                                        className='language-option__select'
                                        value={item.language}
                                    >{item.language}
                                    </option>
                                ))
                            }
                        </select>
                    </div>
                </div>
                
            </div>
            <ToastContainer /> */}
