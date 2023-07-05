import { createSlice } from "@reduxjs/toolkit";
import { counter } from "../utils";

const initialState = {
  ingestionTypes: ["Breakfast", "Lunch", "Dinner", "Snack/other"],
  mealsMain: [
    {
      id: counter(),
      ingestionType: "Breakfast",
      measurement_description: "cup",
      metric_serving_amount: 241,
      metric_serving_unit: "g",
      number_of_units: 1,
      calories: 60,
      food_name: "Chicken Rice Soup",
      totalNumberOfUnits: 1
    },
    {
      id: counter(),
      ingestionType: "Snack/other",
      measurement_description: "fl oz", //жидкая унция
      metric_serving_amount: 29.6,
      metric_serving_unit: "g",
      number_of_units: 1,
      calories: 4,
      food_name: "Coffee with Cream",
      totalNumberOfUnits: 3 // тут считать
    },
    {
      id: counter(),
      ingestionType: "Snack/other",
      measurement_description: "g",
      metric_serving_amount: 100,
      metric_serving_unit: "g",
      number_of_units: 100,
      calories: 266,
      food_name: "White Bread",
      totalNumberOfUnits: 120 // тут считать
    },
  ],
};

const mealsSlice = createSlice({
  name: "mealsReducer",
  initialState,
  reducers: {
    addMealOnMain(state, action) {
      let newMeal = { ...action.payload, id: counter() };
      return {
        ...state,
        mealsMain: [...state.mealsMain, newMeal],
      };
    },
    deleteMealOnMain(state, action) {
      return {
        ...state,
        mealsMain: state.mealsMain.filter((m) => m.id !== action.payload),
      };
    },
  },
});

export const { addMealOnMain, deleteMealOnMain } = mealsSlice.actions;
export default mealsSlice.reducer;
