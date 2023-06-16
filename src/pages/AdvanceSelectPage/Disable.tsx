import { AdvanceSelect, OptionType } from '../../components/AdvanceSelect';
import './style.css';

export const DisableSelectPage = () =>
{
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
            <AdvanceSelect
                options={test}
                disable
            />
        </div>
    );
};
