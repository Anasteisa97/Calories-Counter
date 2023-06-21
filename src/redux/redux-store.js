import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
import thunkMiddleware from "redux-thunk";
import mealsReducer from "./meals-reducer";
import appReducer from "./app-reducer";
import search from "./search-reducer";

let store = configureStore(
  {
    reducer: {
      meals: mealsReducer,
      app: appReducer,
      search,
    },
  },
  applyMiddleware(thunkMiddleware)
);

export default store;
