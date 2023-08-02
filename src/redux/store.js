import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
import thunkMiddleware from "redux-thunk";
import mealsReducer from "./meals-reducer";
import app from "./app-reducer";
import search from "./search-reducer";
import addMeal from "./add-meal-reducer"

let store = configureStore(
  {
    reducer: {
      meals: mealsReducer,
      app,
      search,
      addMeal
    },
  },
  applyMiddleware(thunkMiddleware)
);

export default store;
