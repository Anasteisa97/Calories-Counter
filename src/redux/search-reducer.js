import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { searchApi } from "../api/api";

export const fetchSearchResults = createAsyncThunk(
  "getSearchResults",
  async (searchString) => {
    try {
      const response = await searchApi(searchString);
      return response.food ?? [];
    } catch (err) {
      throw err;
    }
  }
);

const initialState = {
  results: [],
  error: null,
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    resetResults(state) {
      state.results = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearchResults.fulfilled, (state, action) => {
        state.results = action.payload;
        state.error = null;
      })
      .addCase(fetchSearchResults.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export const { resetResults } = searchSlice.actions;
export default searchSlice.reducer;
