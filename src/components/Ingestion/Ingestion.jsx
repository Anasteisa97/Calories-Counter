import MealContainer from "../Meal/MealContainer";
import {useDispatch} from "react-redux";
import {resetResults} from "../../redux/search-reducer";

export const Ingestion = ({ meals, ingestionTotalCalories, title, setRightScreenVisible }) => {

  const dispatch = useDispatch();

  return (
    <div className="w-80 max-w-full bg-sky-50 p-4 rounded-2xl shadow-lg">
      <div className="flex items-center justify-between">
        <span className="text-2xl">{title}</span>
        {ingestionTotalCalories ? (
          <span className="grow mx-2 text-right text-xl">
            {ingestionTotalCalories}
          </span>) : null}
        <button
          className="p-1"
          onClick={() => {
            setRightScreenVisible(true);
            dispatch(resetResults())
          }}
        >
          +
        </button>
      </div>
      {meals.length
        ? meals.map((meal) => <MealContainer meal={meal} key={meal.id} />)
        : null}
    </div>
  );
};
