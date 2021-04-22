import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
// import {
//   getDefaultMiddleware,
//   configureStore,
//   combineReducers,
// } from "@reduxjs/toolkit";
// import logger from "redux-logger";
import rootReducer from "./rootReducer";

// Reducers

// Actions

// Types

export const store = createStore(rootReducer, composeWithDevTools());
