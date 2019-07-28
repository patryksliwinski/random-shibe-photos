import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import propTypes from "prop-types";
import Image from "./Image";

const ImagesRow = props => {
  const [photos, setPhotos] = useState([]);
  const { mode, index, photos: propsPhotos } = props;
  let checkPhotos;

  if (mode === "favorite") {
    checkPhotos = propsPhotos;
  }

  useEffect(() => {
    if (mode === "infinityScroll")
      fetch("http://shibe.online/api/shibes?count=4")
        .then(response => response.json())
        .then(responseJSON => {
          setPhotos(responseJSON);
        });
    if (mode === "favorite") {
      setPhotos(
        JSON.parse(window.localStorage.getItem("photos")).slice(
          index * 4,
          index * 4 + 4
        )
      );
    }
  }, [checkPhotos]);

  const classList = "images-row row mb-5 mt-5";

  return (
    <div className={classList}>
      {photos.length
        ? photos.map((photo, index) => (
            <div className='col-3' key={`image-col-3-${index}`}>
              <Image index={index} src={photo} />
            </div>
          ))
        : null}
    </div>
  );
};

ImagesRow.defaultProps = {
  photos: []
};

ImagesRow.propTypes = {
  index: propTypes.number.isRequired,
  mode: propTypes.string,
  photos: propTypes.array
};

const mapStateToProps = ({ mode, photos }) => {
  return {
    mode,
    photos
  };
};

export default connect(mapStateToProps)(ImagesRow);
