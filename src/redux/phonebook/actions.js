import types from "./types";
import { createAction } from "@reduxjs/toolkit";

export const onAddContact = createAction(types.ADD_CONTACT);

export const onRemoveContact = createAction(types.REMOVE_CONTACT);

export const onChangeFilter = createAction(types.FILTER_CONTACT);
