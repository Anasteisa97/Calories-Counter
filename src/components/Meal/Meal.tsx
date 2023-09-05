import React, { FC } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { red } from "@mui/material/colors";
import type { Meal as MealType } from "../../types/types";

type MealProps = MealType & {
  onDelete: (id: number) => {
    payload: any;
    type: "mealsReducer/deleteMealOnMain";
  };
};

export const Meal: FC<MealProps> = ({
  calories,
  metric_serving_amount,
  protein,
  fat,
  carbohydrate,
  onDelete,
  id,
  food_name,
  metric_serving_unit,
  totalNumberOfUnits,
  measurement_description,
}) => {
  return (
    <div className="flex items-center justify-between mb-2">
      <div>
        <div className="text-white">{food_name}</div>
        <div className="text-sm text-slate-200">
          {metric_serving_amount} {metric_serving_unit} / {totalNumberOfUnits}{" "}
          {measurement_description}
        </div>
        <div className="text-xs text-slate-300">
          f {fat} | c {carbohydrate} | p {protein}
        </div>
      </div>
      <span className="grow mx-2 text-right text-slate-200">{calories}</span>
      <button className="p-1" onClick={() => onDelete(id)}>
        <CloseIcon fontSize="medium" sx={{ color: red[700] }} />
      </button>
    </div>
  );
};
