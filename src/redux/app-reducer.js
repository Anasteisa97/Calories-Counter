import {checkTokenData} from "../api/token/checkTokenData";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {checkTokenInCookie} from "../utils/cookie/checkTokenInCookie";

export const initializeApp = createAsyncThunk("checkToken", async () => {
  //return await checkTokenData;
  return await checkTokenInCookie;
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