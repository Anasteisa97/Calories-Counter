import CloseIcon from '@mui/icons-material/Close';

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
    <div className="flex items-center justify-between">
      <div>
        <div>{food_name}</div>
        <div className="text-sm text-slate-500">
          {totalMetricServingAmount} {metric_serving_unit}{" "}
          / {totalNumberOfUnits} {measurement_description}
        </div>
        <div className="text-xs text-slate-500">
          {totalProtein} / {totalFat} / {totalCarbohydrate}
        </div>
      </div>
      <span className="grow mx-2 text-right">{totalMealCalories}</span>
      <button className="p-1" onClick={() => deleteMealOnMain(id)}>
        <CloseIcon fontSize="small"/>
      </button>
    </div>
  );
};
