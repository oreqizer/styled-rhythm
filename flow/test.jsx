/* @flow */
/* eslint-disable prefer-const, no-unused-vars */
import React from "react";
import { Box, Line } from "../src";

const theme = {
  baseFont: 16,
  baseLineScale: 1.5,
};

const Comp = (props: { text: string, className: string }) => (
  <div className={props.className}>{props.text}</div>
);

let b = <Box theme={theme} height={2} marginTop={0.25} marginBottom={0.75} />;
let l = <Line theme={theme} fontSize={2} marginTop={0.25} marginBottom={0.75} />;

b = <Box as={Comp} theme={theme} height={2} marginTop={0.25} marginBottom={0.75} />;
l = <Line as={Comp} theme={theme} fontSize={2} marginTop={0.25} marginBottom={0.75} border={5} />;

// $FlowExpected
b = <Box as={Comp} theme={theme} height="2" marginTop={0.25} marginBottom={0.75} />;
// $FlowExpected
l = <Line as={Comp} theme={theme} fontSize="2" marginTop={0.25} marginBottom={0.75} border={5} />;
