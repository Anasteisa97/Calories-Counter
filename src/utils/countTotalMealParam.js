export function countTotalMealParam(param, totalNumberOfUnits, numberOfUnits) {
  return (
    (totalNumberOfUnits * param) / numberOfUnits
  ).toFixed(2);
}