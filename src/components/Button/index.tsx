import { useLanguage } from '../../contexts/LanguageContext';

type ButtonProps = {
    className: string,
    text: string,
    onClick: () => void
}

export const Button: React.FC<ButtonProps> = (props) =>
{

    const { className, text } = props;
    const { onClick } = props;
    const { t } = useLanguage();
    return (
        <>
            <button
                className={`btn__container ${className}`}
                onClick={onClick}
            >
                <span>{`${t(text)}`}</span>
            </button>
        </>
    );
};
