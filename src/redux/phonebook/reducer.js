const phonebookState = { items: [], filter: "" };

export const phonebook = (state = phonebookState, { type, payload }) => {
  switch (type) {
    case "counter/add_contact":
      return {
        ...state,
      };
    case "counter/remove_contact":
      return {
        ...state,
      };
    case "counter/filter_contact":
      return {
        ...state,
      };

    default:
      return state;
  }
};
