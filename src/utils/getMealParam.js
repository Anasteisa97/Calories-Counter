export function getMealParam(param, totalNumberOfUnits, numberOfUnits) {
  return +Number((totalNumberOfUnits * param) / numberOfUnits)
    .toFixed(2);
}