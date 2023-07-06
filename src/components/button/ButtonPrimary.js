
const ButtonPrimary = ({
    children,
    styles,
    text
}) => {
    return (
        <button className="h-[56px] bg-primary-300-400 font-light text-light-white text-sm xl:text-18 text-center" style={styles}>
            {children ? children : text}
        </button>
    );
};

export default ButtonPrimary;