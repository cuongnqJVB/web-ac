import TrainingProcessItem from "./TraniningProcessItem";
import TraniningOverallChart from "./TraniningOverallChart";
import CategoryList from "./CategoryList";
import FoodList from "./FoodList";

const HomePage = () => {
    return (
        <div className="app-homepage w-full flex flex-col">
            <div className="flex flex-wrap mb-[24px]">
                <TrainingProcessItem />
                <TraniningOverallChart />
            </div>

            <CategoryList />

            <FoodList />
        </div>
    );
};

export default HomePage;