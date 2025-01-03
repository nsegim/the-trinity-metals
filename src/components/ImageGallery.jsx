// import PropTypes from "prop-types";

// const ImageGallery = ({ imageName, customClass }) => {
//   const placeholder = "${process.env.PUBLIC_URL}/placeholder.jpg";

//   const imageSrc = imageName ? `${process.env.PUBLIC_URL}/images/${imageName}` : placeholder;

//   return <img src={imageSrc} alt="Gallery Image" className={customClass} />;
// };

// ImageGallery.propTypes = {
//   imageName: PropTypes.string.isRequired,
// };

// export default ImageGallery;

import PropTypes from "prop-types";

const ImageGallery = ({ imageName, customClass, placeholder, altText }) => {
  const defaultPlaceholder = `public/placeholder.jpg`;

  const imageSrc = imageName
    ? `public/images/${imageName}`
    : placeholder || defaultPlaceholder;

  const handleImageError = (e) => {
    e.target.src = placeholder || defaultPlaceholder;
  };

  return (
    <img
      src={imageSrc}
      alt={altText || "Gallery Image"}
      className={customClass}
      onError={handleImageError}
    />
  );
};

ImageGallery.propTypes = {
  imageName: PropTypes.string.isRequired,
  customClass: PropTypes.string,
  placeholder: PropTypes.string,
  altText: PropTypes.string,
};

export default ImageGallery;

