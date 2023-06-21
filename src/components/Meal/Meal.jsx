export const Meal = ({
  totalMealCalories,
  totalMetricServingAmount,
  ...props
}) => {
  let {
    id,
    food_name,
    metric_serving_unit,
    number_of_units,
    measurement_description,
  } = props.meal;

  return (
    <div className="flex items-center justify-between">
      <div>
        <div>{food_name}</div>
        <div className="text-xs text-slate-500">
          {totalMetricServingAmount} {metric_serving_unit} / {number_of_units}{" "}
          {measurement_description}
        </div>
      </div>
      <span className="grow mx-2 text-right">{totalMealCalories}</span>
      <button className="p-1" onClick={() => props.deleteMealOnMain(id)}>
        x
      </button>
    </div>
  );
};
