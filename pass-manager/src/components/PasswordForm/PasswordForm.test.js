import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import PasswordForm from "./PasswordForm";

describe("<PasswordForm />", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<PasswordForm submitPassword={() => true} password="hashedpassword" testPassword={() => true} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("mounts password checker component", () => {
    const wrapper = shallow(<PasswordForm submitPassword={() => true} />);
    expect(wrapper.find("PasswordChecker")).toHaveLength(1);
  });
});
