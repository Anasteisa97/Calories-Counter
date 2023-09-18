import React, { FC } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { red } from "@mui/material/colors";
import type { Meal as MealType } from "../../types/types";
import FatIcon from "../../assets/icons/fat.png"
import CarbsIcon from "../../assets/icons/carbs.png"
import ProteinIcon from "../../assets/icons/protein.png"

type MealProps = MealType & {
  onDelete: (id: number) => {
    payload: MealType;
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
    <div className="flex items-center justify-between mb-3">
      <div className="grow">
        <div className="text-lime-200">{food_name}</div>
        <div className="text-sm text-slate-200">
          {totalNumberOfUnits} {measurement_description}
          {" "}({metric_serving_amount} {metric_serving_unit})
        </div>
      </div>
      <div className="ml-4 flex flex-col items-end">
        <div className="flex">
          <span className="text-xs text-slate-300">{fat}</span>
          <img src={FatIcon} alt="fat" title="fat" width={16} height={16}/>
        </div>
        <div className="flex">
          <span className="text-xs text-slate-300">{carbohydrate}</span>
          <img src={CarbsIcon} alt="carbs" title="carbs" width={16} height={16}/>
        </div>
        <div className="flex">
          <span className="text-xs text-slate-300">{protein}</span>
          <img src={ProteinIcon} alt="protein" title="protein" width={16} height={16}/>
        </div>
      </div>
      <span className="mr-2 ml-4 text-right text-slate-200">{calories}</span>
      <button className="p-1" onClick={() => onDelete(id)}>
        <CloseIcon fontSize="medium" sx={{ color: red[700] }} />
      </button>
    </div>
  );
};
