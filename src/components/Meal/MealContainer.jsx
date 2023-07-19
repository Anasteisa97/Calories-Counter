import { Meal } from "./Meal";
import { connect } from "react-redux";
import { deleteMealOnMain } from "../../redux/meals-reducer";
import {getTotalMealParam} from "../../utils/getTotalMealParam";

const MealContainer = (props) => {
  let { calories, metric_serving_amount, number_of_units, totalNumberOfUnits, protein, fat, carbohydrate } = props.meal;

  const totalMealCalories = getTotalMealParam(calories, totalNumberOfUnits, number_of_units);
  const totalMetricServingAmount = getTotalMealParam(metric_serving_amount, totalNumberOfUnits, number_of_units);
  const totalProtein = getTotalMealParam(protein, totalNumberOfUnits, number_of_units);
  const totalFat = getTotalMealParam(fat, totalNumberOfUnits, number_of_units);
  const totalCarbohydrate = getTotalMealParam(carbohydrate, totalNumberOfUnits, number_of_units);

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
