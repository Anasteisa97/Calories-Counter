import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getByIdApi } from "../api/api";

export const fetchById = createAsyncThunk("getFoodById", async (id) => {
  return await getByIdApi(id);
});

const servingProps = ['calories', 'measurement_description', 'metric_serving_amount', 'metric_serving_unit', 'number_of_units', 'serving_description'];

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
