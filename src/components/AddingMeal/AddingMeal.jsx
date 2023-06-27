import { useDispatch } from "react-redux";
import { resetResults } from "../../redux/search-reducer";
import {addMealOnMain} from "../../redux/meals-reducer";
import { useSelector } from "react-redux";
import {useState} from "react";

const AddingMeal = ({ setSearchScreenIsActive }) => {
  const dispatch = useDispatch();
  const currentIngestionType = useSelector((state) => state.addMeal.ingestionType);
  const servings = useSelector((state) => state.addMeal.servings);
  const ingestionTypes = useSelector((state) => state.meals.ingestionTypes);

  //console.log(currentMeal);
  //console.log(servings);

  let [selectedIngestionTYpe, setSelectedIngestionType] = useState(currentIngestionType)

  const handleBtnAddClick = () => {
    setSearchScreenIsActive(true);
    dispatch(resetResults());
    let testObj = {
      serving_id: 666,
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

  const handleSelectIngestionChange = (e) => {
    setSelectedIngestionType(e.target.value);
  }

  return (
    <>
      <button
        className="text-4xl absolute top-4 left-4"
        onClick={() => setSearchScreenIsActive(true)}
      >
        ←
      </button>
      <h2>{currentIngestionType.food_name}</h2>
      <input type="number" className="border-2 my-6 w-16" />
      <select>
        <option value="g">g</option>
        <option value="cup">cup</option>
      </select>
      <select
        value={selectedIngestionTYpe}
        onChange={(e) => handleSelectIngestionChange(e)}
      >
        {ingestionTypes.map(type => (
          <option value={type} key={type}>
            {type}
          </option>
        ))}
      </select>
      <div>Total calories:</div>
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
