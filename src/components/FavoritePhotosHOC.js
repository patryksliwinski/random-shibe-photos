import React from "react";
import { connect } from "react-redux";
import App from "./App";
import propTypes from "prop-types";
import { changeRowsLength } from "../actions";
import { changeMode } from "../actions";

const FavoritePhotosHOC = props => {
  const { dispatch, photos } = props;
  const browserHeight = window.innerHeight;
  const rowsLengthWindow = Math.ceil(browserHeight / 400);
  const rowsLengthPhotos = Math.ceil(photos.length / 4);
  let rowsLength;

  if (rowsLengthPhotos > rowsLengthWindow) {
    rowsLength = rowsLengthWindow;
  } else {
    rowsLength = rowsLengthPhotos;
  }

  dispatch(changeMode("favorite"));
  dispatch(changeRowsLength(rowsLength));

  return <App />;
};

FavoritePhotosHOC.propTypes = {
  photos: propTypes.array
};

const mapStateToProps = ({ photos }) => {
  return { photos };
};

export default connect(mapStateToProps)(FavoritePhotosHOC);
