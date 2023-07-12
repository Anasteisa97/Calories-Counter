import MealContainer from "../Meal/MealContainer";
import {useDispatch} from "react-redux";
import {setIngestionType} from "../../redux/add-meal-reducer";
import {useContext} from "react";
import {RightScreenContext} from "../../Contexts/contexts";
import AddIcon from '@mui/icons-material/Add';

export const Ingestion = ({ meals, ingestionTotalCalories, title }) => {

  const dispatch = useDispatch();

  const {setRightScreenVisible} = useContext(RightScreenContext);

  const handleBtnAddClick = () => {
    setRightScreenVisible(true);
    dispatch(setIngestionType(title));
  }

  return (
    <div className="w-80 max-w-full bg-sky-50 p-4 rounded-2xl shadow-lg">
      <div className="flex items-center justify-between">
        <span className="text-2xl">{title}</span>
        {ingestionTotalCalories > 0 && (
          <span className="grow mx-2 text-right text-xl">
            {ingestionTotalCalories}
          </span>)}
        <button
          className="p-1"
          onClick={() => handleBtnAddClick()}
        >
          <AddIcon fontSize="small" />
        </button>
      </div>
      {meals.length > 0 && meals.map((meal) => <MealContainer meal={meal} key={meal.id} />)}
    </div>
  );
};
