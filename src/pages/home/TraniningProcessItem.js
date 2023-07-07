import { ProgressRing } from "../../components/animations";

const TrainingProcessItem = () => {
    return (
        <div className="w-[42%] min-h-[316px] flex items-center justify-center bg-primary-300">
            <ProgressRing width={180} height={180} percent={75} >
                <div className="absolute item-center">
                    <span className="font-inter text-16 xl:text-18 font-normal text-light-white text-shadow-orange-300 mr-1">
                        05/21
                    </span>
                    <span className="font-inter text-xl xl:text-25 font-normal text-light-white text-shadow-orange-300">75%</span>
                </div>
            </ProgressRing>
        </div>
    );
};

export default TrainingProcessItem;