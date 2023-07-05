import { useDispatch } from "react-redux";
import { resetResults } from "../../redux/search-reducer";
import { addMealOnMain } from "../../redux/meals-reducer";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import AddingMeal from "./AddingMeal";

const AddingMealContainer = ({ setSearchScreenIsActive }) => {
  const dispatch = useDispatch();

  const { ingestionType, food_name, servings } = useSelector(
    (state) => state.addMeal
  );
  const ingestionTypes = useSelector((state) => state.meals.ingestionTypes);

  useEffect(() => {
    if (servings.length > 0) {
      setCurrentServing(servings[0]);
    }
    return () => {
      dispatch(resetResults());
    };
  }, [servings, dispatch]);

  let [currentServing, setCurrentServing] = useState();
  let [selectedIngestionType, setSelectedIngestionType] =
    useState(ingestionType);

  const handleBtnAddClick = () => {
    setSearchScreenIsActive(true);
    let newMeal = {
      ...currentServing,
      ingestionType: selectedIngestionType,
      //measurement_description: measurement,
      //metric_serving_amount: 241,
      //metric_serving_unit: "g",
      //number_of_units: currentServing.numberOfUnits,
      //calories: servingCalories,
      food_name,
    };
    dispatch(addMealOnMain(newMeal));
  };

  const setNumberOfUnits = (n) => {
    setCurrentServing({ ...currentServing, totalNumberOfUnits: n });
  };
  const setMeasurement = (n) => {
    setCurrentServing({ ...currentServing, measurement_description: n });
  };

  const handleChangeServing = (i) => {
    setCurrentServing(servings[i]);
  };

  return (
    <AddingMeal
      setSearchScreenIsActive={setSearchScreenIsActive}
      servings={servings}
      food_name={food_name}
      setNumberOfUnits={setNumberOfUnits}
      setMeasurement={setMeasurement}
      selectedIngestionType={selectedIngestionType}
      setSelectedIngestionType={setSelectedIngestionType}
      ingestionTypes={ingestionTypes}
      handleBtnAddClick={handleBtnAddClick}
      serving={currentServing}
      handleChangeServing={handleChangeServing}
    />
  );
};

export default AddingMealContainer;
