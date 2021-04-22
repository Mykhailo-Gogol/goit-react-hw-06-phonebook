const counterState = {
  value: 0,
};

export const counter = (state = counterState, { type, payload }) => {
  switch (type) {
    case "counter/increment":
      return {
        ...state,
        value: state.value + payload,
      };
    case "counter/decrement":
      return {
        ...state,
        value: state.value - payload,
      };

    default:
      return state;
  }
};
