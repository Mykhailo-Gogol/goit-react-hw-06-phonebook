import { combineReducers } from "redux";
import { counter } from "./counter/reducer.js";
import { phonebook } from "./phonebook/reducer";

const rootReducer = combineReducers({
  counter,
  phonebook,
});

export default rootReducer;
