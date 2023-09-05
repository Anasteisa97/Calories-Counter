import React, { FC } from "react";
import { Meal } from "./Meal";
import { deleteMealOnMain } from "../../redux/meals-reducer";
import { getMealParam } from "../../utils/getMealParam";
import type { Meal as MealType } from "../../types/types";
import { useAppDispatch } from "../../redux/hooks";

type MealContainerProps = {
  meal: MealType;
};

const MealContainer: FC<MealContainerProps> = ({
  meal: {
    calories,
    metric_serving_amount,
    number_of_units: num,
    totalNumberOfUnits: total,
    protein,
    fat,
    carbohydrate,
    id,
    food_name,
    metric_serving_unit,
    measurement_description,
  },
}) => {
  const dispatch = useAppDispatch();
  const totalCalories = getMealParam(calories, total, num);
  const totalMetricServingAmount = getMealParam(
    metric_serving_amount,
    total,
    num
  );
  const totalProtein = getMealParam(protein, total, num);
  const totalFat = getMealParam(fat, total, num);
  const totalCarbohydrate = getMealParam(carbohydrate, total, num);

  const onDelete = (id: number) => dispatch(deleteMealOnMain(id));

  return (
    <Meal
      {...{
        id,
        food_name,
        onDelete,
        metric_serving_unit,
        measurement_description,
        totalNumberOfUnits: total,
      }}
      calories={totalCalories}
      metric_serving_amount={totalMetricServingAmount}
      protein={totalProtein}
      fat={totalFat}
      carbohydrate={totalCarbohydrate}
    />
  );
};

export default MealContainer;
