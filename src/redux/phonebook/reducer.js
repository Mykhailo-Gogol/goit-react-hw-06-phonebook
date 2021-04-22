import { combineReducers } from "redux";
import data from "../../data/contacts.json";
import types from "./types";

const phonebookState = { items: [...data], filter: "" };

const contacts = (state = phonebookState.items, { type, payload }) => {
  switch (type) {
    case types.ADD_CONTACT:
      return {
        ...state,
        payload,
      };
    case types.REMOVE_CONTACT:
      return [...state].filter(({ id }) => id !== payload.id);

    default:
      return state;
  }
};

const filter = (state = phonebookState.filter, { type, payload }) => {
  switch (type) {
    case types.FILTER_CONTACT:
      return payload;

    default:
      return state;
  }
};

export default combineReducers({
  contacts,
  filter,
});
