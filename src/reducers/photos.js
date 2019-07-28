import { ADD_PHOTO, REMOVE_PHOTO } from "../types";

const initialState = JSON.parse(window.localStorage.getItem("photos"))
  ? JSON.parse(window.localStorage.getItem("photos"))
  : [];

const photos = (state = initialState, action) => {
  const { payload } = action;

  switch (action.type) {
    case ADD_PHOTO:
      window.localStorage.setItem(
        "photos",
        JSON.stringify([...state, payload])
      );

      return [...state, payload];
    case REMOVE_PHOTO:
      window.localStorage.setItem(
        "photos",
        JSON.stringify(state.filter(photo => payload !== photo))
      );
      return state.filter(photo => payload !== photo);
    default:
      return state;
  }
};

export default photos;
