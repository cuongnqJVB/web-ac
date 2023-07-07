import { foodCategories } from "../../config"
import { CategoryItem } from "../../components/items";

const CategoryList = () => {
    return (
        <div className="home-category app-container mb-[24px]">
            <div className="grid grid-cols-4 gap-[30px] md:gap-[46px] xl:gap-[76px] px-[20px] xl:px-[90px]">
                {
                    foodCategories.map((cate, index) => (
                        <CategoryItem
                            icon={cate.icon}
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

export default CategoryList;