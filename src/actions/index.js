import {
  ADD_PHOTO,
  CHANGE_MODE,
  CHANGE_ROWS_LENGTH,
  INCREMENT_ROWS_LENGTH,
  REMOVE_PHOTO,
  ADD_ROW,
  REMOVE_ROW
} from "../types";

export const addPhoto = photo => {
  return {
    type: ADD_PHOTO,
    payload: photo
  };
};

export const removePhoto = photo => {
  return {
    type: REMOVE_PHOTO,
    payload: photo
  };
};

export const changeMode = mode => {
  return {
    type: CHANGE_MODE,
    payload: mode
  };
};

export const changeRowsLength = rows => {
  return {
    type: CHANGE_ROWS_LENGTH,
    payload: rows
  };
};

export const incrementRowsLength = () => {
  return {
    type: INCREMENT_ROWS_LENGTH
  };
};

export const addFakeRows = () => {
  return {
    type: ADD_ROW
  };
};

export const removeFakeRows = () => {
  return {
    type: REMOVE_ROW
  };
};
