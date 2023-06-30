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
    }
  }, [servings]);

  let [numberOfUnits, setNumberOfUnits] = useState();
  let [measurement, setMeasurement] = useState();
  let [servingCalories, setServingCalories] = useState();
  let [selectedIngestionType, setSelectedIngestionType] = useState(ingestionType);

  const handleBtnAddClick = () => {
    setSearchScreenIsActive(true);
    dispatch(resetResults());
    let newMeal = {
      ingestionType: selectedIngestionType,
      measurement_description: "cup",
      metric_serving_amount: 241,
      metric_serving_unit: "g",
      number_of_units: numberOfUnits,
      calories: 60,
      food_name,
    }
    dispatch(addMealOnMain(newMeal));
  }

  return <>
    <AddingMeal
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
    {/*<button
      className="text-4xl absolute top-4 left-4"
      onClick={() => setSearchScreenIsActive(true)}
    >
      ←
    </button>
    <h2>{food_name}</h2>

    {numberOfUnits && <input
      type="number"
      className="border-2 my-6 w-16"
      value={numberOfUnits}
      onChange={(e) => setNumberOfUnits(e.target.value)}
    />}

    {measurement && <select
      name="measurement"
      value={measurement}
      onChange={(e) => setMeasurement(e.target.value)}
    >
      {servings && servings.map(s => (
        <option value={s.measurement_description}>
          {s.measurement_description}
        </option>
      ))}
    </select>}

    <select
      name="ingestion"
      value={selectedIngestionType}
      onChange={(e) => setSelectedIngestionType(e.target.value)}
    >
      {ingestionTypes.map(type => (
        <option value={type} key={type}>
          {type}
        </option>
      ))}
    </select>

    <div className="text-xl mt-6">
      {servingCalories * numberOfUnits} cal
    </div>

    <button
      className="text-lg mt-6 px-6 py-3 bg-sky-100 rounded-xl shadow-lg"
      onClick={() => handleBtnAddClick()}
    >
      ADD
    </button>*/}
  </>
};

export default AddingMealContainer;
