import React from "react";
import { shallow, mount } from "enzyme";
import "jest-styled-components";

import Box from "../Box";

const theme = {
  baseFont: 16,
  baseLineScale: 1.5,
};

const Component = () => <div>test</div>;

describe("#Box", () => {
  it("should render with correct styles", () => {
    const wrapper = shallow(<Box theme={theme} height={2} marginTop={0.25} marginBottom={0.75} />);

    expect(wrapper).toHaveStyleRule("box-sizing", "border-box");
    expect(wrapper).toHaveStyleRule("height", "48px");
    expect(wrapper).toHaveStyleRule("margin-top", "6px");
    expect(wrapper).toHaveStyleRule("margin-bottom", "18px");
  });

  it("should render a default element", () => {
    const wrapper = mount(<Box theme={theme} height={2} marginTop={0.25} marginBottom={0.75} />);

    expect(wrapper.find("div").exists()).toBe(true);
  });

  it("should render a custom element", () => {
    const wrapper = mount(
      <Box as={Component} theme={theme} height={2} marginTop={0.25} marginBottom={0.75} />,
    );

    expect(wrapper.find(Component).exists()).toBe(true);
  });

  it("should do a props cleanup", () => {
    const wrapper = mount(<Box theme={theme} height={2} marginTop={0.25} marginBottom={0.75} />);

    expect(wrapper.find("div").prop("as")).toBeUndefined();
    expect(wrapper.find("div").prop("theme")).toBeUndefined();
    expect(wrapper.find("div").prop("height")).toBeUndefined();
    expect(wrapper.find("div").prop("marginTop")).toBeUndefined();
    expect(wrapper.find("div").prop("marginBottom")).toBeUndefined();
  });
});
