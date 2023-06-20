import { AiOutlineCheck } from 'react-icons/ai';
import './style.css';
import { useEffect, useRef, useState } from 'react';
import { getListValue } from '../../ultil';
import { useLanguage } from '../../contexts/LanguageContext';

type AdvanceSelectProps = {
    disable?: boolean,
    multiple?: boolean,
    options: OptionType[],
    defaultValue?: number[]

    onChange?: (data: OptionType[]) => void,
    placeholder?: string,
}

export type OptionType = {
    id: string,
    label: string,
    flag?: string
}

export const AdvanceSelect:React.FC<AdvanceSelectProps> = (props) =>
{
    const { disable = false, multiple = false, options, defaultValue, placeholder = 'vui lòng chọn...' } = props;
    const { onChange } = props;

    const [isHidden, setIsHidden] = useState(true);
    const [value, setValue] = useState<OptionType[]>([]);
    const [filteredOption, setFilteredOption] = useState<OptionType[]>(options);
    const [inputValue, setInputValue] = useState<string>('');
    const [currentOption, setCurrentOption] = useState(0);
    
    const { t } = useLanguage();

    const ref = useRef<any>();

    const handleChange = (item: OptionType) =>
    {

        if (item)
        {
            handleDelete(item);
        }
        if (multiple)
        {
            !(value.filter(i => i.id === item.id).length > 0) &&
            setValue([...value, item]);
        }
        else {setValue([item]);}
        
        setIsHidden(true);
        setInputValue('');
    };


    const handleDelete = (option: OptionType) =>
    {
        setValue(value.filter(item => item.id !== option.id));

    };

    const handleFocus = () =>
    {
        setIsHidden(false);
        setCurrentOption(0);

    };

    const handleClearValue = () =>
    {
        setValue([]);
        setIsHidden(true);

    };

    useEffect(() =>
    {
        setFilteredOption(options.filter(item => !item.label.indexOf(inputValue)));
    }, [inputValue, options]);

    useEffect(() =>
    {
        onChange && onChange(value);

    }, [onChange, value]);

    useEffect(() =>
    {
        if (defaultValue) {setValue(getListValue(defaultValue, options));}
    }, []);


    const handleClickWrap = () =>
    {

        setIsHidden(true);
        setInputValue('');

    };


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
                if (currentOption >= 0 && currentOption <= filteredOption.length - 1)
                {
                    handleDelete(filteredOption[currentOption]);
                    if (multiple)
                    {
                        !value.includes(filteredOption[currentOption]) &&
                        setValue([...value, filteredOption[currentOption]]);
                    }
                    else {setValue([filteredOption[currentOption]]);}
                }
                break;
            
            case 'Backspace':
                if (inputValue === '') {!disable && setValue(value.filter(item => item !== value[value.length - 1]));}
                break;
        }
    };


    return (
        <div
            ref={ref}
            className='advance-select__container'
            onBlur={handleClickWrap}
        >
            <div className='advance-select'>
                <div
                    className={`advance-select__wrapper ${disable && 'disabled'}`}
                    onKeyDown={e => handleKeyDown(e)}
                    onFocus={handleFocus}
                >
                    <div className='advance-select__value'>
                        {
                            multiple
                                ? value.map((item, key) => (
                                    <div
                                        key={key}
                                        className='value-option'
                                    >
                                        
                                        <div>{item.label}</div>
                                        {
                                            !disable && (
                                                <div
                                                    className='value-option__icon'
                                                >
                                                    <i
                                                        className="fa-solid fa-xmark"
                                                        style={{ cursor: 'pointer', paddingLeft: '16px', fontSize: '12px' }}
                                                        onClick={() => handleDelete(item)}
                                                    />
                                                </div>
                                            )
                                        }
                                     
                                    </div>
                                ))
                                : <span>{value.length > 0 && value[0].label}</span>
                        }
                    </div>
                    <div
                        className='input-bar'
                    >
                        <input
                            type="text"
                            placeholder={value.length > 0 ? '' : `${t(placeholder)}`}
                            className='advance-select__search'
                            autoComplete='off'
                            value={inputValue}
                            onChange={e => setInputValue(e.target.value)}
                        />
                        
                    </div>
                </div>

                <div className='advance-select__handler'>
                    {
                        value.length > 0 && !disable && (
                            <i
                                className="fa-solid fa-xmark"
                                style={{ color: 'var(--color)', cursor: 'pointer' }}
                                onClick={handleClearValue}
                            />
                        )
                    }
                
                </div>
            </div>
            <ul
                className="advance-select__option"
                hidden={isHidden}
            >
                {
                    filteredOption.length === 0
                        ? <li style={{ color: 'var(--color)' }}>{`${t('Không có dữ liệu')}`}</li>
                        : filteredOption.map((item, key) => (
                    
                            <li
                                key={key}
                                className={`${item === filteredOption[currentOption] && 'current-option'}`}
                                onMouseDown={() => handleChange(item)}
                        
                            >
                                <div className={`${value.length > 0 && 'checked'} `}>
                                    {
                                        (value.filter(i => i.id === item.id).length > 0) && (
                                            <AiOutlineCheck
                                                style={{ paddingRight: '10px', width: '100%' }}
                                                color='var(--modal-color)'
                                            />
                                        )
                                    }
                                </div>
                                    

                                <span style={{ color: 'var(--color)', flex: '1' }}>{item.label}</span>
                            </li>
                        ))
                }
            </ul>
        </div>
    );
};
