import {checkTokenData} from "../api/checkTokenData";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const initializeApp = createAsyncThunk("checkToken", async () => {
  return await checkTokenData;
});

const initialState = {
  initialized: false,
}

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(initializeApp.fulfilled, (state) => {
        state.initialized = true;
      })
  }
})

export default appSlice.reducer;