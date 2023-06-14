
import { ReactElement } from 'react';
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

function App(): ReactElement
{
    const { addToast } = useToast();
    const { theme, setTheme } = useTheme();
    const { showModal } = useModal();

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

    const test: OptionType[] = [
        {
            id: '0',
            label: 'hello',
        },
        {
            id: '1',
            label: 'hi',
        },
        {
            id: '2',
            label: 'ola',
        },
        {
            id: '3',
            label: 'hello',
        },
        {
            id: '4',
            label: 'hi',
        },
        {
            id: '5',
            label: 'xin chao tat ca cac ban xin chao tat ca cac ban xin chao tat ca cac ban xin chao tat ca cac ban xinsasdawa cac dwawdawdddddddddddd xin chao tat ca cac ban',
        },

    ];

    return (
        <div className="App">
            <div className='app__handler'>
                <div className='app__btn'>
                    <div>
                        <Button
                            className='warn'
                            text='warn'
                            onClick={() => addToast({
                                type: 'warn',
                                message: 'This is warn message',
                            })}
                        
                        />
                        <Button
                            className='error'
                            text='error'
                            onClick={() => addToast({
                                type: 'error',
                                message: 'This is error message',
                            })}
                        
                        />
                        <Button
                            className='success'
                            text='success'
                            onClick={() => addToast({
                                type: 'success',
                                message: 'This is success message',
                            })}
                        
                        />
                        <Button
                            className='warn'
                            text='Show modal'
                            onClick={handleClick}
                        />
                        <UploadImage
                            canEnlarge
                        />
                    </div>
                    <AdvanceSelect
                        options={test}
                        defaultValue={[1, 2]}
                        // disable
                        multiple
                        onChange={handleChange}
                    />

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
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}

export default App;
