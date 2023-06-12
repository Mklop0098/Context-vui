
type ButtonProps = {
    className: string,
    text: string,
    onClick: () => void
}

export const Button: React.FC<ButtonProps> = (props) =>
{

    const { className, text } = props;
    const { onClick } = props;

    return (
        <>
            <button
                className={`btn__container ${className}`}
                onClick={onClick}
            >
                <span>{text}</span>
            </button>
        </>
    );
};
