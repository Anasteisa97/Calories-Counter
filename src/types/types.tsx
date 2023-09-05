export type Meal = {
  id: number;
  ingestionType?: string;
  measurement_description: string;
  metric_serving_amount: number;
  metric_serving_unit: string;
  number_of_units?: number;
  calories: number;
  food_name: string;
  protein: number;
  fat: number;
  carbohydrate: number;
  totalNumberOfUnits: number;
};
