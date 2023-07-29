import { Ingestion } from "./Ingestion";
import {getMealParam} from "../../utils/getMealParam";

const IngestionList = ({ ingestionTypes, meals }) => {
  const getMealsInIngestion = (meals, title) => {
    return meals?.filter((meal) => meal.ingestionType === title);
  };

  const getIngestionTotalCalories = (meals, title) => {
    return getMealsInIngestion(meals, title).reduce(
      (acc, cur) => acc + getMealParam(cur.calories, cur.totalNumberOfUnits, cur.number_of_units),
      0
    );
  };

  return ingestionTypes.map((i) => (
    <Ingestion
      meals={getMealsInIngestion(meals, i)}
      title={i}
      key={i}
      ingestionTotalCalories={getIngestionTotalCalories(meals, i)}
    />
  ));
};

export default IngestionList;
