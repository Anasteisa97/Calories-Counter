export const Meal = ({
  totalMealCalories, totalMetricServingAmount, deleteMealOnMain, meal,
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
        <div className="text-xs text-slate-500">
          {totalMetricServingAmount} {metric_serving_unit}{" "}
          / {totalNumberOfUnits} {measurement_description}
        </div>
      </div>
      <span className="grow mx-2 text-right">{totalMealCalories}</span>
      <button className="p-1" onClick={() => deleteMealOnMain(id)}>
        x
      </button>
    </div>
  );
};
