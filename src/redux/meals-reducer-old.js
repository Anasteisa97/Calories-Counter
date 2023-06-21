import { counter } from "../utils";

const ADD_MEAL_MAIN = "ADD_MEAL_MAIN";
const DELETE_MEAL_MAIN = "DELETE_MEAL_MAIN";

let initialState = {
  ingestionTypes: ["Breakfast", "Lunch", "Dinner", "Snack/other"],
  mealsMain: [
    {
      id: counter(),
      serving_id: 17204,
      ingestionType: "Breakfast",
      measurement_description: "cup",
      metric_serving_amount: 241,
      metric_serving_unit: "g",
      number_of_units: 1,
      calories: 60,
      food_name: "Chicken Rice Soup",
    },
    {
      id: counter(),
      serving_id: 2423037,
      ingestionType: "Snack/other",
      measurement_description: "fl oz", //жидкая унция
      metric_serving_amount: 29.6,
      metric_serving_unit: "g",
      number_of_units: 3, // тут считать
      calories: 4,
      food_name: "Coffee with Cream",
    },
    {
      id: counter(),
      serving_id: 17204,
      ingestionType: "Snack/other",
      measurement_description: "cup",
      metric_serving_amount: 241,
      metric_serving_unit: "g",
      number_of_units: 1.5,
      calories: 60,
      food_name: "Chicken Rice Soup",
    },
  ],
  mealsInSearch: [],
};

const mealsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MEAL_MAIN: {
      let newMeal = { ...action.meal, id: counter() };
      return {
        ...state,
        mealsMain: [...state.mealsMain, newMeal],
      };
    }
    case DELETE_MEAL_MAIN: {
      return {
        ...state,
        mealsMain: state.mealsMain.filter(m => m.id !== action.mealId)
      }
    }
    default:
      return state;
  }
};

export const addMealOnMain = (meal) => ({
  type: ADD_MEAL_MAIN,
  meal,
});
export const deleteMealOnMain = (mealId) => ({
  type: DELETE_MEAL_MAIN,
  mealId,
});

export default mealsReducer;
