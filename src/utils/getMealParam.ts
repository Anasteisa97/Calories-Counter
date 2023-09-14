import { Meal } from "../types/types";

export function getMealParam(
  paramCount: number,
  totalNumberOfUnits: number,
  numberOfUnits: number
) {
  return +Number((totalNumberOfUnits * paramCount) / numberOfUnits).toFixed(2);
}

export const getTotalParam = (param: string, meals: Meal[]) => {
  return meals.reduce(
    (acc, cur) =>
      acc +
      getMealParam(cur[param], cur.totalNumberOfUnits, cur.number_of_units),
    0
  );
};