import { useDispatch } from "react-redux";
import { resetResults } from "../../redux/search-reducer";
import {addMealOnMain} from "../../redux/meals-reducer";
import { useSelector } from "react-redux";
import {useState} from "react";

const AddingMeal = ({ setSearchScreenIsActive }) => {
  const dispatch = useDispatch();
  const ingestionTypes = useSelector((state) => state.meals.ingestionTypes);
  const { ingestionType, food_name, servings } = useSelector((state) => state.addMeal);

  let currentServing = servings[0];

  let [selectedIngestionType, setSelectedIngestionType] = useState(ingestionType);
  let [measurement, setMeasurement] = useState(currentServing.measurement_description);
  let [numberOfUnits, setNumberOfUnits] = useState(currentServing.number_of_units);

  console.log(servings);

  const handleBtnAddClick = () => {
    setSearchScreenIsActive(true);
    dispatch(resetResults());
    let testObj = {
      ingestionType: "Breakfast",
      measurement_description: "cup",
      metric_serving_amount: 241,
      metric_serving_unit: "g",
      number_of_units: 1,
      calories: 60,
      food_name: "test",
    }
    dispatch(addMealOnMain(testObj));
  }

  const handleMeasurementChange = (e) => {
    setMeasurement(e.target.value)
  }

  return (
    <>
      <button
        className="text-4xl absolute top-4 left-4"
        onClick={() => setSearchScreenIsActive(true)}
      >
        ←
      </button>
      <h2>{food_name}</h2>
      <input
        type="number"
        className="border-2 my-6 w-16"
        value={numberOfUnits}
        onChange={(e) => setNumberOfUnits(e.target.value)}
      />
      <select
        name="measurement"
        value={measurement}
        onChange={(e) => handleMeasurementChange(e)}
      >
        {servings.map(s => (
          <option value={s.measurement_description}>
            {s.measurement_description}
          </option>
        ))}
      </select>
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
        {currentServing.calories * currentServing.number_of_units} cal
      </div>
      <button
        className="text-lg mt-6 px-6 py-3 bg-sky-100 rounded-xl shadow-lg"
        onClick={() => handleBtnAddClick()}
      >
        ADD
      </button>
    </>
  );
};

export default AddingMeal;
