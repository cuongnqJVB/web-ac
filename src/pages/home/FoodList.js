import { foodItems } from "../../config"
import { FoodItem } from "../../components/items";

const FoodList = () => {
    return (
        <div className="home-category app-container mb-[28px]">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-[8px]">
                {
                    foodItems.map((cate, index) => (
                        <FoodItem
                            image={cate.image}
                            text={cate.text}
                            href={cate.to}
                            key={index}
                        />
                    ))
                }h
            </div>
        </div>
    )
};

export default FoodList;