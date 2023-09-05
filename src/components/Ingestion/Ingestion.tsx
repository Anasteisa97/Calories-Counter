import MealContainer from "../Meal/MealContainer";
import { setIngestionType } from "../../redux/add-meal-reducer";
import React, { useContext, FC } from "react";
import { RightScreenContext } from "../../contexts/contexts";
import AddIcon from "@mui/icons-material/Add";
import { green } from "@mui/material/colors";
import type { Meal } from "../../types/types";
import { useAppDispatch } from "../../redux/hooks";

type IngestionProps = {
  meals: Meal[];
  ingestionTotalCalories: number;
  title: string;
};

export const Ingestion: FC<IngestionProps> = ({
  meals,
  ingestionTotalCalories,
  title,
}) => {
  const dispatch = useAppDispatch();

  const { setRightScreenVisible } = useContext(RightScreenContext);

  const onAdd = () => {
    setRightScreenVisible(true);
    dispatch(setIngestionType(title));
  };

  return (
    <div className="bg-blue-500 p-6 rounded-2xl shadow-lg max-w-xl">
      <div className="flex items-center justify-between mb-3">
        <span className="text-3xl text-white overflow-hidden overflow-ellipsis">
          {title}
        </span>
        {ingestionTotalCalories > 0 && (
          <span className="grow mr-4 ml-6 text-right text-2xl text-white">
            {ingestionTotalCalories}
          </span>
        )}
        <button
          className="p-1 w-10 h-10 bg-blue-50 rounded-full shrink-0"
          onClick={onAdd}
        >
          <AddIcon fontSize="medium" sx={{ color: green[500] }} />
        </button>
      </div>
      {meals.length > 0 &&
        meals.map((meal) => <MealContainer meal={meal} key={meal.id} />)}
    </div>
  );
};
