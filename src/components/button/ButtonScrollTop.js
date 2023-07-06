
const scrollToTop = () => {
    if (window) {
        window.scrollTo({
            top: 0,
            left: 0,
        });
    }
};

const ButtonScrollTop = () => (
    <button className="h-[56px] bg-primary-300-400 font-light text-light-white text-sm xl:text-18 text-center" style={styles}>
        to toph
    </button>
);

export default ButtonScrollTop;