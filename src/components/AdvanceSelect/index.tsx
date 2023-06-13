import { AiOutlineCheck } from 'react-icons/ai';
import './style.css';
import { useEffect, useRef, useState } from 'react';

type AdvanceSelectProps = {
    disable: boolean,
    multiple: boolean,
    options: string[],
    onChange: (data: string[]) => void,
    defaultValue: string
}


export const AdvanceSelect:React.FC<AdvanceSelectProps> = (props) =>
{
    const { disable, multiple, options, defaultValue } = props;
    const { onChange } = props;
    const [isHidden, setIsHidden] = useState(true);
    const [value, setValue] = useState<string[]>([]);
    const [filteredOption, setFilteredOption] = useState<string[]>(options);
    const [inputValue, setInputValue] = useState<string>('');
    const [currentOption, setCurrentOption] = useState(-1);

    const handleChange = (item: string) =>
    {
        handleDelete(item);
        multiple ? !value.includes(item) && setValue([...value, item]) : setValue([item]);
        setIsHidden(!isHidden);
        setInputValue('');
        setCurrentOption(-1);
    };

    const handleDelete = (option: string) =>
    {
        setValue(value.filter(item => item !== option));
        setCurrentOption(-1);

    };

    const handleFocus = () =>
    {
        setIsHidden(!isHidden);
        setCurrentOption(-1);

    };

    const handleClearValue = () =>
    {
        setValue([]);
        setIsHidden(!isHidden);
        setInputValue('');
    };

    useEffect(() =>
    {
        setFilteredOption(options.filter(item => !item.indexOf(inputValue)));
    }, [inputValue, options]);

    useEffect(() =>
    {
        onChange(value);

    }, [value]);

    useEffect(() =>
    {
        if (defaultValue)
        {
            setValue([defaultValue]);
            multiple && setFilteredOption([...filteredOption, defaultValue]);
        }
    }, []);

    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) =>
    {
        switch (e.key)
        {
            case 'ArrowUp':
                if (currentOption > 0) {setCurrentOption(currentOption - 1);}
                else {setCurrentOption(filteredOption.length - 1);}
                break;
            
            case 'ArrowDown':
                if (currentOption < filteredOption.length - 1) {setCurrentOption(currentOption + 1);}
                else {setCurrentOption(0);}
                break;
            
            case 'Enter':
                if (currentOption !== -1)
                {
                    handleDelete(filteredOption[currentOption]);
                    multiple
                        ? !value.includes(filteredOption[currentOption]) &&
                        setValue([...value, filteredOption[currentOption]])
                        : setValue([filteredOption[currentOption]]);
                    setInputValue('');
                }
                break;
            
            case 'Backspace':
                if (inputValue === '') {setValue(value.filter(item => item !== value[value.length - 1]));}
        }
    };


    return (
        <div
            className='advance-select__container'

        >
            <div
                className='advance-select__wrapper'
                tabIndex={0}
                onKeyDown={e => handleKeyDown(e)}
            >
                <div className='advance-select__value'>
                    {
                        multiple
                            ? value.map((item, key) => (
                                <div
                                    key={key}
                                    className='value-option'
                                >
                                    <div>{item}</div>

                                    <i
                                        className="fa-solid fa-xmark"
                                        style={{ cursor: 'pointer' }}
                                        onClick={() => handleDelete(item)}
                                    />
                                </div>
                            ))
                            : <span>{value.length > 0 && value[0]}</span>
                    }
                </div>
                <input
                    type="text"
                    placeholder={value.length === 0 ? 'Please Choose!' : ''}
                    className='advance-select__search'
                    autoComplete='off'
                    disabled={disable}
                    value={inputValue}
                    onChange={e => setInputValue(e.target.value)}
                    onFocus={handleFocus}
                />
                {
                    <i
                        className="fa-solid fa-xmark"
                        style={{ color: 'var(--color)', cursor: 'pointer' }}
                        onClick={handleClearValue}

                    />
                }
            </div>
            <ul
                className="advance-select__option"
                hidden={isHidden}
            >
                {
                    filteredOption.length === 0
                        ? <li style={{ color: 'var(--color)' }}>Không có dữ liệu</li>
                        : filteredOption.map((item, key) => (
                    
                            <li
                                key={key}
                                className={`${item === filteredOption[currentOption] && 'current-option'}`}
                                onClick={() => handleChange(item)}
                        
                            >
                                {value.includes(item) && (
                                    <AiOutlineCheck
                                        style={{ paddingRight: '10px' }}
                                        color='var(--modal-color)'

                                    />
                                )}
                                <span style={{ color: 'var(--color)' }}>{item}</span>
                            </li>
                        ))
                }
            </ul>
        </div>
    );
};
