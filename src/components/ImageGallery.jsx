import PropTypes from "prop-types";

const ImageGallery = ({ imageUrl, imageName, customClass, height ,width }) => {
  const placeholder = "./images/placeholder.jpg";

  const imageSrc = imageUrl ? imageUrl : (imageName ? `./images/${imageName}` : placeholder);

  return <img src={imageSrc} alt="Gallery Image" className={customClass} height={height} width={width} />;
};

ImageGallery.propTypes = {
  // imageName: PropTypes.string.isRequired,
};

export default ImageGallery;


