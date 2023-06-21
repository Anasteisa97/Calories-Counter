import { Meal } from "./Meal";
import { connect } from "react-redux";
import { deleteMealOnMain } from "../../redux/meals-reducer";

const MealContainer = (props) => {
  let { calories, metric_serving_amount, number_of_units } = props.meal;

  const totalMealCalories = number_of_units * calories;
  const totalMetricServingAmount = (
    number_of_units * metric_serving_amount
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
