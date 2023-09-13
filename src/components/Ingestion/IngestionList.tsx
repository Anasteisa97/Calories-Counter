import React, { FC } from "react";
import { Ingestion } from "./Ingestion";
import { getMealParam } from "../../utils/getMealParam";
import type { Meal } from "../../types/types";

type IngestionListPrams = {
  ingestionTypes: string[];
  meals: Meal[];
};

const IngestionList: FC<IngestionListPrams> = ({ ingestionTypes, meals }) => {
  const getMealsInIngestion = (meals: Meal[], title: string) => {
    return meals?.filter((meal) => meal.ingestionType === title);
  };

  const getIngestionTotalCalories = (meals: Meal[], title: string) => {
    return getMealsInIngestion(meals, title).reduce(
      (acc, cur) =>
        acc +
        getMealParam(cur.calories, cur.totalNumberOfUnits, cur.number_of_units),
      0
    );
  };

  return <>
    {ingestionTypes.map((i) => (
      <Ingestion
        meals={getMealsInIngestion(meals, i)}
        title={i}
        key={i}
        ingestionTotalCalories={getIngestionTotalCalories(meals, i)}
      />
    ))}
  </>
};

export default IngestionList;
