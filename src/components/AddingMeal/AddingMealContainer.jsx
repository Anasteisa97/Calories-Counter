import { useDispatch } from "react-redux";
import { addMealOnMain } from "../../redux/meals-reducer";
import { useSelector } from "react-redux";
import {useContext, useEffect, useState} from "react";
import AddingMeal from "./AddingMeal";
import {SearchActiveContext} from "../../Contexts/contexts";

const AddingMealContainer = ( props ) => {
  const dispatch = useDispatch();
  let {setSearchScreenActive} = useContext(SearchActiveContext);

  const { ingestionType, food_name, servings } = useSelector((state) => state.addMeal );
  const ingestionTypes = useSelector((state) => state.meals.ingestionTypes);

  useEffect(() => {
    if (servings.length > 0) {
      setCurrentServing(servings[0]);
    }
  }, [servings]);

  let [currentServing, setCurrentServing] = useState();
  let [selectedIngestionType, setSelectedIngestionType] = useState(ingestionType);

  const handleBtnAddClick = () => {
    setSearchScreenActive(true);
    let newMeal = {
      ...currentServing,
      ingestionType: selectedIngestionType,
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
      backToSearch={() => setSearchScreenActive(true)}
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
