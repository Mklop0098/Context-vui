import { useRef } from 'react';
import { AdvanceSelect, OptionType } from '../../components/AdvanceSelect';
import './style.css';
import { useLanguage } from '../../contexts/LanguageContext';

export const DefaultSelectPage = () =>
{

    const refDefault = useRef<any>();
    const refDisable = useRef<any>();
    const refMultiple = useRef<any>();
    const { t } = useLanguage();
    

    const executeScroll = (ref: React.MutableRefObject<any>) => ref.current.scrollIntoView({ behavior: 'smooth' });

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
        <div className='advance-select-page'>
            <div>
                <h1>Advance Select</h1>
                <span>{`${t('Các thành phần AdvanceSelect được sử dụng để thu thập dữ liệu do người dùng cung cấp từ danh sách các tùy chọn.')}`}</span>
            </div>
            <div>
                <h3>{`${t('Mục lục')}`}</h3>
                <li onClick={() => executeScroll(refDefault)}>{`${t('AdvanceSelect cơ bản')}`}</li>
                <li onClick={() => executeScroll(refDisable)}>{`${t('AdvanceSelect đa lựa chọn')}`}</li>
                <li onClick={() => executeScroll(refMultiple)}>{`${t('AdvanceSelect vô hiệu')}`}</li>
            </div>
            <div
                ref={refDefault}
                className='advance-block'
            >
                <h3>{`${t('AdvanceSelect cơ bản')}`}</h3>
                <span>{`${t('AdvanceSelect mặc định có thể lựa chọn một thành phần trong danh sách các lựa chọn')}`}</span>
                <AdvanceSelect options={test} />
            </div>

            <div
                ref={refMultiple}
                className='advance-block'
            >
                <h3>{`${t('AdvanceSelect đa lựa chọn')}`}</h3>
                <span>{`${t('Multiple AdvanceSelect có thể xử lý nhiều lựa chọn. Nó được kích hoạt với thuộc tính multiple.')}`}</span>
                <AdvanceSelect
                    options={test}
                    multiple
                />
            </div>
            <div
                ref={refDisable}
                className='advance-block'
            >
                <h3>{`${t('AdvanceSelect vô hiệu')}`}</h3>
                <span>{`${t('AdvanceSelect bị vô hiệu hóa. Nó được kích hoạt với tham số disabled.')}`}</span>
                <AdvanceSelect
                    options={test}
                    disable
                />
            </div>


        </div>
    );
};
