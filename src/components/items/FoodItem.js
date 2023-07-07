import { Link } from "react-router-dom";

const FoodItem = ({
    href,
    image,
    text
}) => {
    return (
        <Link className="food_item" to={href}>
            <img src={image} alt="food-menu" />
            <div className="food_item__badge">
                {text}
            </div>
        </Link>
    );
};

export default FoodItem;