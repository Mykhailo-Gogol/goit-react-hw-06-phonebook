import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";

import data from "../../data/contacts.json";
import types from "./types";

const phonebookState = { items: [...data], filter: "" };

const contacts = createReducer(phonebookState.items, {
  [types.ADD_CONTACT]: (state, { type, payload }) => [...state, payload],
  [types.REMOVE_CONTACT]: (state, { type, payload }) => {
    return state.filter(({ id }) => id !== payload);
  },
});

const filter = createReducer(phonebookState.filter, {
  [types.FILTER_CONTACT]: (state, { type, payload }) => payload,
});

export default combineReducers({
  contacts,
  filter,
});
