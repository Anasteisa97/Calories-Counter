import { addMealOnMain } from "../../redux/meals-reducer";
import React, { useContext, useEffect, useState, FC, ChangeEvent } from "react";
import AddingMeal from "./AddingMeal";
import { SearchActiveContext } from "../../contexts/contexts";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";

const AddingMealContainer: FC = () => {
  const dispatch = useAppDispatch();
  let { setSearchActive } = useContext(SearchActiveContext);

  const { ingestionType, food_name, servings } = useAppSelector(
    (state) => state.addMeal
  );

  useEffect(() => {
    if (servings.length) {
      setCurrentServing(servings[0]);
    }
  }, [servings]);

  let [currentServing, setCurrentServing] = useState({});
  let [selectedIngestionType, setSelectedIngestionType] =
    useState(ingestionType);

  const handleSubmit = (e: SubmitEvent) => {
    e.preventDefault();
    setSearchActive(true);
    let newMeal = {
      ...currentServing,
      ingestionType: selectedIngestionType,
      food_name,
    };
    dispatch(addMealOnMain(newMeal));
  };

  const setNumberOfUnits = (e: ChangeEvent<HTMLInputElement>) => {
    setCurrentServing({
      ...currentServing,
      totalNumberOfUnits: e.target.value,
    });
  };

  const handleChangeServing = (i: number) => {
    setCurrentServing(servings[i]);
  };

  return (
    <AddingMeal
      backToSearch={() => setSearchActive(true)}
      food_name={food_name}
      setNumberOfUnits={setNumberOfUnits}
      selectedIngestionType={selectedIngestionType}
      setSelectedIngestionType={setSelectedIngestionType}
      handleSubmit={handleSubmit}
      serving={currentServing}
      handleChangeServing={handleChangeServing}
    />
  );
};

export default AddingMealContainer;
