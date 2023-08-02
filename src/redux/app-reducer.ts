import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {checkTokenInCookie} from "../utils/cookie/checkTokenInCookie";
import {RootState} from "./store";

export const initializeApp = createAsyncThunk("checkToken", async () => {
  return await checkTokenInCookie;
});

interface AppState {
  initialized: boolean
}

const initialState: AppState = {
  initialized: false,
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    default: state => state,
  },
  extraReducers: (builder) => {
    builder
      .addCase(initializeApp.fulfilled, (state) => {
        state.initialized = true;
      })
  }
})

// Other code such as selectors can use the imported `RootState` type
export const selectAppInitialized = (state: RootState) => state.app.initialized

export default appSlice.reducer;