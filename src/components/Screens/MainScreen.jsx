import IngestionList from "../Ingestion/IngestionList";
import {useSelector} from "react-redux";
import {getMealParam} from "../../utils/getMealParam";
import Chart from "../Chart/Chart";
import React from "react";

const MainScreen = (props) => {
  const {ingestionTypes, mealsMain} = useSelector((state => state.meals))

  const getTotalParam = (param) => {
    return mealsMain.reduce(
      (acc, cur) => acc + getMealParam(cur[param], cur.totalNumberOfUnits, cur.number_of_units),
      0
    );
  }

  const totalCalories = getTotalParam('calories');
  const chartData = [
    { name: 'fat', value: getTotalParam('fat') },
    { name: 'carbs', value: getTotalParam('carbohydrate') },
    { name: 'protein', value: getTotalParam('protein') },
  ]

  return (
    <div className="grow p-5 flex items-center justify-center flex-col h-screen">
      <div className="grid grid-cols-2 gap-5">
        <IngestionList
          ingestionTypes={ingestionTypes}
          meals={mealsMain}
        />
      </div>
      <div className="text-4xl mt-6 mb-6">{totalCalories}</div>
      <Chart data={chartData}/>
    </div>
  )
}

export default MainScreen
