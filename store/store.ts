import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import { loadState } from "./browser-storage";
import booksReducers from "./reducers/bookStore";

const reducers = combineReducers({
  books: booksReducers,
});

export const store = configureStore({
  devTools: true,
  reducer: reducers,
  // here we restore the previously persisted state
  preloadedState: loadState(),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
