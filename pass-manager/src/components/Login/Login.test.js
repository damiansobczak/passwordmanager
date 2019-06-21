import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import Login from "./Login";

describe("<Login />", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Login login={() => true} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders login information", () => {
    const wrapper = shallow(<Login login={() => true} />);
    expect(wrapper.find(".card-title").text()).toContain("Zaloguj się przy pomocy konta Google");
  });

  it("renders login button correctly", () => {
    const wrapper = shallow(<Login login={() => true} />);
    expect(wrapper.find(".btn").text()).toContain("Zaloguj");
  });
});
