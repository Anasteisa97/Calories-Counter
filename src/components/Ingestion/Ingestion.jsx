import MealContainer from "../Meal/MealContainer";
import {useDispatch} from "react-redux";
import {setIngestionType} from "../../redux/add-meal-reducer";
import {useContext} from "react";
import {RightScreenContext} from "../../Contexts/contexts";
import AddIcon from '@mui/icons-material/Add';
import {green} from "@mui/material/colors";

export const Ingestion = ({ meals, ingestionTotalCalories, title }) => {

  const dispatch = useDispatch();

  const {setRightScreenVisible} = useContext(RightScreenContext);

  const handleBtnAddClick = () => {
    setRightScreenVisible(true);
    dispatch(setIngestionType(title));
  }

  return (
    <div className="bg-blue-500 p-6 rounded-2xl shadow-lg max-w-xl">
      <div className="flex items-center justify-between mb-3">
        <span className="text-3xl text-white">{title}</span>
        {ingestionTotalCalories > 0 && (
          <span className="grow mr-4 ml-6 text-right text-2xl text-white">
            {ingestionTotalCalories}
          </span>)}
        <button
          className="p-1 w-10 h-10 bg-blue-50 rounded-full"
          onClick={() => handleBtnAddClick()}
        >
          <AddIcon fontSize="medium" sx={{ color: green[500] }} />
        </button>
      </div>
      {meals.length > 0 && meals.map((meal) => <MealContainer meal={meal} key={meal.id} />)}
    </div>
  );
};
