import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { searchApi } from "../api/api";

export const fetchSearchResults = createAsyncThunk(
  "getSearchResults",
  async (searchString: string) => {
    try {
      const response = await searchApi.getResults(searchString);
      return response.food ?? [];
    } catch (err) {
      throw err;
    }
  }
);

type SearchState = {
  results: any;
  error: string;
  isFetching: boolean;
};

const initialState: SearchState = {
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
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearchResults.fulfilled, (state: SearchState, action) => {
        state.results = action.payload;
        state.error = null;
        state.isFetching = false;
      })
      .addCase(fetchSearchResults.rejected, (state: SearchState, action) => {
        state.error = action.error.message;
      });
  },
});

export const { resetResults, setFetching } = searchSlice.actions;
export default searchSlice.reducer;
