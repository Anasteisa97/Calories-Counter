import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getByIdApi} from "../api/api";

export const fetchById = createAsyncThunk(
  "getFoodById",
  async (id) => {
    return await getByIdApi(id);
  }
);

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
    changeIngestionType(state, action) {

    }
  },
});

export default addMealSlice.reducer;