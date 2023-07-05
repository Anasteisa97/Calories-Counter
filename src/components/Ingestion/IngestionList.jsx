import { Ingestion } from "./Ingestion";

const IngestionList = ({ ingestionTypes, meals, setRightScreenVisible }) => {
  const mealsInIngestion = (meals, title) => {
    return meals?.filter((meal) => meal.ingestionType === title);
  };

  const ingestionTotalCalories = (meals, title) => {
    return mealsInIngestion(meals, title).reduce(
      (acc, curVal) => acc + ((curVal.totalNumberOfUnits * curVal.calories) / curVal.number_of_units),
      0
    );
  };

  return ingestionTypes.map((i) => (
    <Ingestion
      meals={mealsInIngestion(meals, i)}
      title={i}
      key={i}
      setRightScreenVisible={setRightScreenVisible}
      ingestionTotalCalories={ingestionTotalCalories(meals, i)}
    />
  ));
};

export default IngestionList;
