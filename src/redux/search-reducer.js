import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { searchApi } from "../api/api";

export const fetchSearchResults = createAsyncThunk(
  "getSearchResults",
  async (searchString) => {
    try {
      const response = await searchApi.getResults(searchString);
      return response.food ?? [];
    } catch (err) {
      throw err;
    }
  }
);

const initialState = {
  results: [],
  error: null,
  isFetching: false,
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    resetResults(state) {
      state.results = [];
    },
    setFetching(state) {
      state.isFetching = true;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearchResults.fulfilled, (state, action) => {
        state.results = action.payload;
        state.error = null;
        state.isFetching = false;
      })
      .addCase(fetchSearchResults.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export const { resetResults, setFetching } = searchSlice.actions;
export default searchSlice.reducer;
