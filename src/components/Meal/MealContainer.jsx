import { Meal } from "./Meal";
import { connect } from "react-redux";
import { deleteMealOnMain } from "../../redux/meals-reducer";
import {getMealParam} from "../../utils/getMealParam";

const MealContainer = (props) => {
  let { calories, metric_serving_amount, number_of_units, totalNumberOfUnits, protein, fat, carbohydrate } = props.meal;

  const totalMealCalories = getMealParam(calories, totalNumberOfUnits, number_of_units);
  const totalMetricServingAmount = getMealParam(metric_serving_amount, totalNumberOfUnits, number_of_units);
  const totalProtein = getMealParam(protein, totalNumberOfUnits, number_of_units);
  const totalFat = getMealParam(fat, totalNumberOfUnits, number_of_units);
  const totalCarbohydrate = getMealParam(carbohydrate, totalNumberOfUnits, number_of_units);

  return (
    <Meal
      totalMealCalories={totalMealCalories}
      totalMetricServingAmount={totalMetricServingAmount}
      totalProtein={totalProtein}
      totalFat={totalFat}
      totalCarbohydrate={totalCarbohydrate}
      {...props}
    />
  );
};

export default connect(null, { deleteMealOnMain })(MealContainer);
