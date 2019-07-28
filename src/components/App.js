import React, { Component } from "react";
import propTypes from "prop-types";
import { connect } from "react-redux";
import ImagesRow from "./ImagesRow";
import Navbar from "./Navbar";
import { addFakeRows, removeFakeRows } from "../actions";

class App extends Component {
  generateRows() {
    let rows = [];
    const { mode, rowsLength, photos, fakeRows, dispatch } = this.props;
    if (mode === "infinityScroll")
      for (let index = 0; rowsLength > index; index++) {
        rows.push(<ImagesRow index={index} key={`images-row-${index}`} />);
      }
    if (mode === "favorite") {
      if (Math.ceil(photos.length / 4) > fakeRows.length)
        dispatch(addFakeRows());
      if (Math.ceil(photos.length / 4) < fakeRows.length)
        dispatch(removeFakeRows());
      rows = this.props.fakeRows.map((fakeRow, index) => (
        <ImagesRow index={index} key={`images-row-${index}`} />
      ));
    }

    return rows;
  }

  render() {
    return (
      <div className='app'>
        <Navbar />
        <div className='container'>{this.generateRows()}</div>
      </div>
    );
  }
}

App.propTypes = {
  rowsLength: propTypes.number.isRequired,
  mode: propTypes.string,
  fakeRows: propTypes.array,
  photos: propTypes.array
};

const mapStateToProps = ({ rowsLength, mode, fakeRows, photos }) => {
  return {
    rowsLength,
    mode,
    fakeRows,
    photos
  };
};

export default connect(mapStateToProps)(App);
