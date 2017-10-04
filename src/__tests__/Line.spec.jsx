/* @flow */
import React from "react";
import { shallow, mount } from "enzyme";
import "jest-styled-components";

import Line from "../Line";

const theme = {
  baseFont: 16,
  baseLineScale: 1.5,
};

const Component = () => <span>test</span>;

describe("#Line", () => {
  it("should render with correct styles", () => {
    const wrapper = shallow(
      <Line theme={theme} fontSize={2} marginTop={0.25} marginBottom={0.75} />,
    );

    expect(wrapper).toHaveStyleRule("font-size", "32px");
    expect(wrapper).toHaveStyleRule("line-height", "48px");
    expect(wrapper).toHaveStyleRule("margin-top", "6px");
    expect(wrapper).toHaveStyleRule("margin-bottom", "18px");
  });

  it("should render a default element", () => {
    const wrapper = mount(<Line theme={theme} fontSize={2} marginTop={0.25} marginBottom={0.75} />);

    expect(wrapper.find("span").exists()).toBe(true);
  });

  it("should render a custom element", () => {
    const wrapper = mount(
      <Line as={Component} theme={theme} fontSize={2} marginTop={0.25} marginBottom={0.75} />,
    );

    expect(wrapper.find(Component).exists()).toBe(true);
  });

  it("should do a props cleanup", () => {
    const wrapper = mount(
      <Line theme={theme} fontSize={2} marginTop={0.25} marginBottom={0.75} border={2} />,
    );

    expect(wrapper.find("span").prop("as")).toBeUndefined();
    expect(wrapper.find("span").prop("theme")).toBeUndefined();
    expect(wrapper.find("span").prop("fontSize")).toBeUndefined();
    expect(wrapper.find("span").prop("marginTop")).toBeUndefined();
    expect(wrapper.find("span").prop("marginBottom")).toBeUndefined();
    expect(wrapper.find("span").prop("border")).toBeUndefined();
  });
});
