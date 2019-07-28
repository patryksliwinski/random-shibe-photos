import React, { Component } from "react";
import { connect } from "react-redux";
import { incrementRowsLength } from "./actions";
import propTypes from "prop-types";

class Helper extends Component {
  constructor(props) {
    super(props);
    let timedEvent;

    window.onscroll = () => {
      clearTimeout(timedEvent);
      timedEvent = setTimeout(() => {
        const { dispatch, photos, rowsLength, mode } = this.props;
        const rowsLengthPhotos = Math.ceil(photos.length / 4);
        let isFavoriteMaxRows;

        if (rowsLengthPhotos > rowsLength || mode === "infinityScroll") {
          isFavoriteMaxRows = false;
        } else {
          isFavoriteMaxRows = true;
        }
        if (
          window.innerHeight + document.documentElement.scrollTop + 300 >=
            document.documentElement.offsetHeight &&
          !isFavoriteMaxRows
        )
          dispatch(incrementRowsLength());
      }, 20);
    };
  }
  render() {
    return <>{this.props.children}</>;
  }
}

const mapStateToProps = ({ rowsLength, photos, mode }) => {
  return {
    rowsLength,
    photos,
    mode
  };
};

Helper.propTypes = {
  rowsLength: propTypes.number.isRequired,
  mode: propTypes.string,
  photos: propTypes.array
};

export default connect(mapStateToProps)(Helper);
