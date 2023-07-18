import { Meal } from "./Meal";
import { connect } from "react-redux";
import { deleteMealOnMain } from "../../redux/meals-reducer";
import {countTotalMealParam} from "../../utils/countTotalMealParam";

const MealContainer = (props) => {
  let { calories, metric_serving_amount, number_of_units, totalNumberOfUnits, protein, fat, carbohydrate } = props.meal;

  const totalMealCalories = countTotalMealParam(calories, totalNumberOfUnits, number_of_units);
  const totalMetricServingAmount = countTotalMealParam(metric_serving_amount, totalNumberOfUnits, number_of_units);
  const totalProtein = countTotalMealParam(protein, totalNumberOfUnits, number_of_units);
  const totalFat = countTotalMealParam(fat, totalNumberOfUnits, number_of_units);
  const totalCarbohydrate = countTotalMealParam(carbohydrate, totalNumberOfUnits, number_of_units);

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
