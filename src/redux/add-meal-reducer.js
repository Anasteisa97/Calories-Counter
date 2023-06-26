import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getByIdApi } from "../api/api";

export const fetchById = createAsyncThunk("getFoodById", async (id) => {
  return await getByIdApi(id);
});

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
  servings: [],
};

const addMealSlice = createSlice({
  name: "addMeal",
  initialState,
  reducers: {
    setIngestionType(state, action) {
      state.currentMeal.ingestionType = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchById.fulfilled, (state, action) => {
        state.servings = action.payload.servings.serving;
        state.currentMeal.food_name = action.payload.food_name;
      })
      .addCase(fetchById.rejected, (state, action) => {
        state.currentMeal = {
          food_name: "rejected",
        };
      });
  },
});

export const { setIngestionType } = addMealSlice.actions;
export default addMealSlice.reducer;
