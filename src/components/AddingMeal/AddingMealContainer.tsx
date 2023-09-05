import { addMealOnMain } from "../../redux/meals-reducer";
import React, { useContext, useEffect, useState, FC } from "react";
import AddingMeal from "./AddingMeal";
import { SearchActiveContext } from "../../contexts/contexts";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";

const AddingMealContainer: FC = () => {
  const dispatch = useAppDispatch();
  let { setSearchActive } = useContext(SearchActiveContext);

  const { ingestionType, food_name, servings } = useAppSelector(
    (state) => state.addMeal
  );
  const ingestionTypes = useAppSelector((state) => state.meals.ingestionTypes);

  useEffect(() => {
    if (servings.length) {
      setCurrentServing(servings[0]);
    }
  }, [servings]);

  let [currentServing, setCurrentServing] = useState({});
  let [selectedIngestionType, setSelectedIngestionType] =
    useState(ingestionType);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setSearchActive(true);
    let newMeal = {
      ...currentServing,
      ingestionType: selectedIngestionType,
      food_name,
    };
    dispatch(addMealOnMain(newMeal));
  };

  const setNumberOfUnits = (e) => {
    setCurrentServing({
      ...currentServing,
      totalNumberOfUnits: e.target.value,
    });
  };

  const handleChangeServing = (i) => {
    setCurrentServing(servings[i]);
  };

  return (
    <AddingMeal
      backToSearch={() => setSearchActive(true)}
      servings={servings}
      food_name={food_name}
      setNumberOfUnits={setNumberOfUnits}
      selectedIngestionType={selectedIngestionType}
      setSelectedIngestionType={setSelectedIngestionType}
      ingestionTypes={ingestionTypes}
      handleSubmit={handleSubmit}
      serving={currentServing}
      handleChangeServing={handleChangeServing}
    />
  );
};

export default AddingMealContainer;
