import PropTypes from "prop-types";

const shape = PropTypes.shape({
  baseFont: PropTypes.number.isRequired,
  baseLineScale: PropTypes.number.isRequired,
});

export default shape;
