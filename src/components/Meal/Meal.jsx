import CloseIcon from '@mui/icons-material/Close';
import {red} from "@mui/material/colors";

export const Meal = ({
  totalMealCalories, totalMetricServingAmount, totalProtein, totalFat, totalCarbohydrate, deleteMealOnMain, meal,
}) => {
  let {
    id,
    food_name,
    metric_serving_unit,
    totalNumberOfUnits,
    measurement_description,
  } = meal;

  return (
    <div className="flex items-center justify-between mb-2">
      <div>
        <div className="text-white">{food_name}</div>
        <div className="text-sm text-slate-200">
          {totalMetricServingAmount} {metric_serving_unit}{" "}
          / {totalNumberOfUnits} {measurement_description}
        </div>
        <div className="text-xs text-slate-300">
          f {totalFat} | c {totalCarbohydrate} | p {totalProtein}
        </div>
      </div>
      <span className="grow mx-2 text-right text-slate-200">{totalMealCalories}</span>
      <button className="p-1" onClick={() => deleteMealOnMain(id)}>
        <CloseIcon fontSize="medium" sx={{ color: red[700] }}/>
      </button>
    </div>
  );
};
