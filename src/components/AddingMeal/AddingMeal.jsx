import { useDispatch } from "react-redux";
import { resetResults } from "../../redux/search-reducer";
import { useSelector } from "react-redux";

const AddingMeal = ({ setSearchScreenIsActive }) => {
  const dispatch = useDispatch();
  const currentMeal = useSelector((state) => state.addMeal.currentMeal);
  const servings = useSelector((state) => state.addMeal.servings);
  const ingestionTypes = useSelector((state) => state.meals.ingestionTypes);

  console.log(currentMeal);
  console.log(servings);

  const handleBtnAddClick = () => {
    setSearchScreenIsActive(true);
    dispatch(resetResults());
  }

  return (
    <>
      <button
        className="text-4xl absolute top-4 left-4"
        onClick={() => setSearchScreenIsActive(true)}
      >
        ←
      </button>
      <h2>{currentMeal.food_name}</h2>
      <input type="number" className="border-2 my-6 w-16" />
      <select name="" id="">
        <option value="g">g</option>
        <option value="cup">cup</option>
      </select>
      <select name="" id="" value="Breakfast">
        <option value="Breakfast">Breakfast</option>
        <option value="Lunch">Lunch</option>
        <option value="Dinner">Dinner</option>
        <option value="Snack/other">Snack/other</option>
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
