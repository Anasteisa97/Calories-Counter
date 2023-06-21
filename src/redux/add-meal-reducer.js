import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {fetchSearchResults} from "./search-reducer";

const initialState = {
  currentMeal: {
    ingestionType: "Breakfast",
    measurement_description: "cup",
    metric_serving_amount: 241,
    metric_serving_unit: "g",
    number_of_units: 1,
    calories: 60,
    food_name: "Chicken Rice Soup",
  },
};

const addMealSlice = createSlice({
  name: "addMeal",
  initialState,
  reducers: {

  },
});