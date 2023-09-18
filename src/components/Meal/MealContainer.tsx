import React, { FC } from "react";
import { Meal } from "./Meal";
import { deleteMealOnMain } from "../../redux/meals-reducer";
import { getIndexMealParam, getMealParam } from "../../utils/getMealParam";
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
  const index = total / num;
  const totalCalories = getIndexMealParam(calories, index);
  const totalMetricServingAmount = getIndexMealParam(metric_serving_amount, index);
  const totalProtein = getIndexMealParam(protein, index);
  const totalFat = getIndexMealParam(fat, index);
  const totalCarbohydrate = getIndexMealParam(carbohydrate, index);

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
