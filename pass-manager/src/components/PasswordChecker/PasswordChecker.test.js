import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import PasswordChecker from "./PasswordChecker";

describe("<PasswordChecker />", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<PasswordChecker password="$hashpassWd1234" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("check password strength", () => {
    const wrapper = shallow(<PasswordChecker password="$hashpassWd1234" />);
    expect(
      wrapper
        .find(".password-strength-meter-progress")
        .props()
        .className.includes("strength-Strong")
    ).toBe(true);
  });
});
