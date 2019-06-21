import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import Navbar from "./Navbar";

describe("<Navbar />", () => {
  it("renders correctly", () => {
    const user = {
      displayName: "Damian Sobczak"
    };
    const tree = renderer.create(<Navbar user={user} login={() => true} logout={() => true} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders user name in logout section", () => {
    const user = {
      displayName: "Damian Sobczak"
    };
    const wrapper = shallow(<Navbar user={user} login={() => true} logout={() => true} />);
    expect(wrapper.find(".nav-cart a").text()).toContain(user.displayName);
  });
});
