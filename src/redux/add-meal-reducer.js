import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { searchApi } from "../api/api";

export const fetchById = createAsyncThunk("getFoodById", async (id) => {
  return await searchApi.getById(id);
});

const servingProps = ['calories', 'measurement_description', 'metric_serving_amount',
  'metric_serving_unit', 'number_of_units', 'serving_description',
  'protein', 'fat', 'carbohydrate'];

const initialState = {
  ingestionType: "",
  food_name: "",
  servings: [],
};

const addMealSlice = createSlice({
  name: "addMeal",
  initialState,
  reducers: {
    setIngestionType(state, action) {
      state.ingestionType = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchById.fulfilled, (state, action) => {
        state.servings = action.payload.servings.serving;
        state.servings.map(serving => {
          for (const prop in serving) {
            if (!(servingProps.includes(prop))) delete serving[prop];
          }
          serving.totalNumberOfUnits = serving.number_of_units = +(Number(serving.number_of_units)).toFixed(2);
        })
        state.food_name = action.payload.food_name;
      })
      .addCase(fetchById.rejected, (state) => {
        state.currentMeal = {
          food_name: "rejected",
        };
      });
  },
});

export const { setIngestionType } = addMealSlice.actions;
export default addMealSlice.reducer;
