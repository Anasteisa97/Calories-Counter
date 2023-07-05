import { Meal } from "./Meal";
import { connect } from "react-redux";
import { deleteMealOnMain } from "../../redux/meals-reducer";

const MealContainer = (props) => {
  let { calories, metric_serving_amount, number_of_units, totalNumberOfUnits } = props.meal;

  const totalMealCalories = (totalNumberOfUnits * calories) / number_of_units;
  const totalMetricServingAmount = (
    (totalNumberOfUnits * metric_serving_amount) / number_of_units
  ).toFixed(2);

  return (
    <Meal
      totalMealCalories={totalMealCalories}
      totalMetricServingAmount={totalMetricServingAmount}
      {...props}
    />
  );
};

export default connect(null, { deleteMealOnMain })(MealContainer);
