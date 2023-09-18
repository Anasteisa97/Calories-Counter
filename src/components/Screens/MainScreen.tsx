import IngestionList from "../Ingestion/IngestionList";
import { getTotalParam } from "../../utils/getMealParam";
import Chart from "../Chart/Chart";
import React, {FC, useContext} from "react";
import { useAppSelector } from "../../redux/hooks";
import CaloriesIcon from "../../assets/icons/calories.png"
import {RightScreenContext} from "../../contexts/contexts";

const MainScreen: FC = () => {
  const { ingestionTypes, mealsMain } = useAppSelector((state) => state.meals);
  let { isRightScreenVisible } = useContext(RightScreenContext);

  const totalCalories = getTotalParam("calories", mealsMain);
  const chartData = [
    { name: "fat", value: getTotalParam("fat", mealsMain) },
    { name: "carbs", value: getTotalParam("carbohydrate", mealsMain) },
    { name: "protein", value: getTotalParam("protein", mealsMain) },
  ];

  return (
    <div className="grow h-screen overflow-y-auto">
      <div className="p-5 flex items-center justify-center flex-col min-h-full">
        <div className={`grid lg:grid-cols-2 gap-5 ${!isRightScreenVisible && 'md:grid-cols-2'}`}>
          <IngestionList ingestionTypes={ingestionTypes} meals={mealsMain} />
        </div>
        <div className="mt-6 mb-6 flex gap-2 items-center">
          <span className="text-4xl">{totalCalories}</span>
          <img src={CaloriesIcon} alt="" className="h-10 w-10"/>
        </div>
        <Chart data={chartData} dataKey="value" />
      </div>
    </div>
  );
};

export default MainScreen;
