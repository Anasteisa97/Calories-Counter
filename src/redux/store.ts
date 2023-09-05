import { configureStore } from "@reduxjs/toolkit";
import mealsReducer from "./meals-reducer";
import app from "./app-reducer";
import search from "./search-reducer";
import addMeal from "./add-meal-reducer";

let store = configureStore({
  reducer: {
    meals: mealsReducer,
    app,
    search,
    addMeal,
  },
});

//export default store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
