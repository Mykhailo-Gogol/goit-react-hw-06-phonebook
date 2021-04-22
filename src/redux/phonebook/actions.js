import types from "./types";

export const onAddContact = (payload) => ({
  type: types.ADD_CONTACT,
  payload,
});

export const onRemoveContact = (payload) => ({
  type: types.REMOVE_CONTACT,
  payload,
});

export const onChangeFilter = (payload) => ({
  type: types.FILTER_CONTACT,
  payload,
});
