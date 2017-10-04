import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import * as fns from "rhythm-fns";

import themePropType from "./themePropType";

const Line = ({ as = "span", theme, fontSize, marginTop, marginBottom, border, ...props }) =>
  React.createElement(as, props);

Line.propTypes = {
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  theme: themePropType,
  fontSize: PropTypes.number.isRequired,
  marginTop: PropTypes.number.isRequired,
  marginBottom: PropTypes.number.isRequired,
  border: PropTypes.number,
};

function getLineHeight(props) {
  return fns.getLineHeight(props.theme.baseFont, props.theme.baseLineScale, props.fontSize);
}

function getMarginTop(props) {
  return fns.getLineMargin(
    props.theme.baseFont,
    props.theme.baseLineScale,
    props.marginTop,
    props.border,
  );
}

function getMarginBottom(props) {
  return fns.getLineMargin(
    props.theme.baseFont,
    props.theme.baseLineScale,
    props.marginBottom,
    props.border,
  );
}

const StyledLine = styled(Line)`
  font-size: ${props => props.fontSize * props.theme.baseFont}px;
  line-height: ${getLineHeight}px;
  margin-top: ${getMarginTop}px;
  margin-bottom: ${getMarginBottom}px;
`;

StyledLine.propTypes = {
  theme: themePropType,
  fontSize: PropTypes.number.isRequired,
  marginTop: PropTypes.number.isRequired,
  marginBottom: PropTypes.number.isRequired,
  border: PropTypes.number,
};

export default StyledLine;
