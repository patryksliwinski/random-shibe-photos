import React from "react";
import { connect } from "react-redux";
import Img from "react-image";
import propTypes from "prop-types";
import { addPhoto, removePhoto } from "../actions";
import Loader from "../utils/ImageLoader";

const buttonFavorite = ({ photos, dispatch, src }) => {
  return !photos.find(photo => photo === src) ? (
    <button
      className='btn btn-success'
      type='button'
      onClick={() => dispatch(addPhoto(src))}>
      Add to favorite
    </button>
  ) : (
    <button
      className='btn btn-danger'
      type='button'
      onClick={() => dispatch(removePhoto(src))}>
      Remove from favorite
    </button>
  );
};

const Image = props => {
  const imgClass = "card loaded";

  return (
    <div className={imgClass}>
      <Img className='card-img-top' loader={<Loader />} src={props.src} />
      <div className='card-body'>{buttonFavorite(props)}</div>
    </div>
  );
};

Image.propTypes = {
  photos: propTypes.array.isRequired,
  src: propTypes.string
};

const mapStateToProps = ({ photos }) => {
  return { photos };
};

export default connect(mapStateToProps)(Image);
