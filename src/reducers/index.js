import { combineReducers } from "redux";
import { mode, rowsLength, fakeRows } from "./utils";
import photos from "./photos";

export default combineReducers({
  mode,
  rowsLength,
  photos,
  fakeRows
});
