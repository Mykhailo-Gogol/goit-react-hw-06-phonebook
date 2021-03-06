import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from "redux-logger";

import rootReducer from "./rootReducer";

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  middleware: [...getDefaultMiddleware(), logger],
});
