import { useDispatch } from "react-redux";
import { resetResults } from "../../redux/search-reducer";
import {addMealOnMain} from "../../redux/meals-reducer";
import { useSelector } from "react-redux";
import {useEffect, useState} from "react";
import AddingMeal from "./AddingMeal";

const AddingMealContainer = ({ setSearchScreenIsActive }) => {
  const dispatch = useDispatch();

  const { ingestionType, food_name, servings } = useSelector((state) => state.addMeal);
  const ingestionTypes = useSelector((state) => state.meals.ingestionTypes);

  useEffect(() => {
    if (servings.length > 0) {
      setNumberOfUnits(servings[0].number_of_units);
      setMeasurement(servings[0].measurement_description)
      setServingCalories(servings[0].calories)

      setCurrentServing(servings[0]);
    }
  }, [servings]);

  let [currentServing, setCurrentServing] = useState();

  let [numberOfUnits, setNumberOfUnits] = useState();
  let [measurement, setMeasurement] = useState();
  let [servingCalories, setServingCalories] = useState();
  let [selectedIngestionType, setSelectedIngestionType] = useState(ingestionType);

  const handleBtnAddClick = () => {
    setSearchScreenIsActive(true);
    dispatch(resetResults());
    let newMeal = {
      ingestionType: selectedIngestionType,
      measurement_description: measurement,
      metric_serving_amount: 241,
      metric_serving_unit: "g",
      number_of_units: numberOfUnits,
      calories: servingCalories,
      food_name,
    }
    dispatch(addMealOnMain(newMeal));
  }

  return <AddingMeal
    setSearchScreenIsActive={setSearchScreenIsActive}
    servings={servings}
    food_name={food_name}
    numberOfUnits={numberOfUnits}
    setNumberOfUnits={setNumberOfUnits}
    measurement={measurement}
    setMeasurement={setMeasurement}
    selectedIngestionType={selectedIngestionType}
    setSelectedIngestionType={setSelectedIngestionType}
    ingestionTypes={ingestionTypes}
    servingCalories={servingCalories}
    handleBtnAddClick={handleBtnAddClick}
  />
};

export default AddingMealContainer;
