import React from "react";
import { PropTypes } from "prop-types";

const Image = ({ className, data, source, onClick }) => {
  const imageDataSource = data
    ? "data:image/jpg;base64," + data
    : source
    ? source
    : require("../../../assets/images/book.jpg");
  return <img src={imageDataSource} className={className} onClick={onClick} />;
};

Image.propTypes = {
  source: PropTypes.string,
  className: PropTypes.string,
};

export default Image;
