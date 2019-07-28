import {
  CHANGE_MODE,
  CHANGE_ROWS_LENGTH,
  INCREMENT_ROWS_LENGTH,
  ADD_ROW,
  REMOVE_ROW
} from "../types";

const initialRows = () => {
  const browserHeight = window.innerHeight;

  return Math.ceil(browserHeight / 300) + 1;
};

export const mode = (state = null, action) => {
  switch (action.type) {
    case CHANGE_MODE:
      return action.payload;
    default:
      return state;
  }
};

export const rowsLength = (state = initialRows(), action) => {
  switch (action.type) {
    case CHANGE_ROWS_LENGTH:
      return action.payload;
    case INCREMENT_ROWS_LENGTH:
      return ++state;
    default:
      return state;
  }
};

export const fakeRows = (state = [], action) => {
  switch (action.type) {
    case ADD_ROW:
      return [...state, {}];
    case REMOVE_ROW:
      return state.slice(0, -1);
    default:
      return state;
  }
};
