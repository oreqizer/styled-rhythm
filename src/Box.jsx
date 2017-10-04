import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import * as fns from "rhythm-fns";

import themePropType from "./themePropType";

const Box = ({ as = "div", theme, height, marginTop, marginBottom, ...props }) =>
  React.createElement(as, props);

Box.propTypes = {
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  theme: themePropType,
  height: PropTypes.number.isRequired,
  marginTop: PropTypes.number.isRequired,
  marginBottom: PropTypes.number.isRequired,
};

function getHeight(props) {
  return fns.getBoxHeight(props.theme.baseFont, props.theme.baseLineScale, props.height);
}

function getMarginTop(props) {
  return fns.getBoxMargin(
    props.theme.baseFont,
    props.theme.baseLineScale,
    props.height,
    props.marginTop,
  );
}

function getMarginBottom(props) {
  return fns.getBoxMargin(
    props.theme.baseFont,
    props.theme.baseLineScale,
    props.height,
    props.marginBottom,
  );
}

const StyledBox = styled(Box)`
  box-sizing: border-box;
  height: ${getHeight}px;
  margin-top: ${getMarginTop}px;
  margin-bottom: ${getMarginBottom}px;
`;

StyledBox.propTypes = {
  theme: themePropType.isRequired,
  height: PropTypes.number.isRequired,
  marginTop: PropTypes.number.isRequired,
  marginBottom: PropTypes.number.isRequired,
};

export default StyledBox;
