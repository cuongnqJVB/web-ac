import { Link } from "react-router-dom";

const CategoryItem = ({
    href,
    icon,
    text
}) => {
    return (
        <Link className="category_item" to={href}>
            <svg xmlns="http://www.w3.org/2000/svg" width="116" height="134" viewBox="0 0 116 134" fill="none">
                <path d="M0 33.5L58 0L116 33.5V100.5L58 134L0 100.5L0 33.5Z" fill="url(#paint0_linear_0_100)" />
                <defs>
                    <linearGradient id="paint0_linear_0_100" x1="25.9565" y1="165.202" x2="147.019" y2="118.302" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#FFCC21" />
                        <stop offset="1" stop-color="#FF963C" />
                    </linearGradient>
                </defs>
            </svg>
            <div className="category_item__content">
                <div className="icon">{icon}</div>
                <span className="text">{text}</span>
            </div>
        </Link>
    );
};

export default CategoryItem;