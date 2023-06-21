import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {searchApi} from "../api/api";
import {counter} from "../utils";

// First, create the thunk
export const fetchSearchResults = createAsyncThunk(
  "getSearchResults",
  async (searchString) => {
    return await searchApi(searchString);
  }
);

const initialState = {
  results: [],
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
      })
      .addCase(fetchSearchResults.rejected, (state, action) => {
        state.results = [
          {
            food_description:
              "rejected",
            food_id: "rejected",
            food_name: "rejected",
          },
        ];
      })
  },
});

export const { resetResults } = searchSlice.actions;
export default searchSlice.reducer;
