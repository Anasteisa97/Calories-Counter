import IngestionList from "../Ingestion/IngestionList";
import { getTotalParam } from "../../utils/getMealParam";
import Chart from "../Chart/Chart";
import React, { FC } from "react";
import { useAppSelector } from "../../redux/hooks";

const MainScreen: FC = () => {
  const { ingestionTypes, mealsMain } = useAppSelector((state) => state.meals);

  const totalCalories = getTotalParam("calories", mealsMain);
  const chartData = [
    { name: "fat", value: getTotalParam("fat", mealsMain) },
    { name: "carbs", value: getTotalParam("carbohydrate", mealsMain) },
    { name: "protein", value: getTotalParam("protein", mealsMain) },
  ];

  return (
    <div className="grow p-5 flex items-center justify-center flex-col h-screen">
      <div className="grid grid-cols-2 gap-5">
        <IngestionList ingestionTypes={ingestionTypes} meals={mealsMain} />
      </div>
      <div className="text-4xl mt-6 mb-6">{totalCalories}</div>
      <Chart data={chartData} dataKey="value" />
    </div>
  );
};

export default MainScreen;
