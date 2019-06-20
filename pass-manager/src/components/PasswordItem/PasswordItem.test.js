import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import PasswordItem from "./PasswordItem";

describe("<PasswordItem />", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<PasswordItem name="Google" date="1-04-2019" key="1" hash="hashedpassword" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders password title", () => {
    const wrapper = shallow(<PasswordItem name="Google" date="" key="" hash="" />);
    expect(wrapper.find(".password-name").text()).toContain("Google");
  });

  it("renders hash", () => {
    const wrapper = shallow(<PasswordItem name="" date="" key="" hash="hashedpassword" />);
    expect(wrapper.find(".password-hash").props().defaultValue).toBe("hashedpassword");
  });

  it("renders hidden hashed password", () => {
    const wrapper = shallow(<PasswordItem name="" date="" key="" hash="hashedpassword" />);
    expect(wrapper.find(".password-hash").props().type).toBe("password");
  });

  it("renders date", () => {
    const date = new Date();
    const currentDate = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
    const wrapper = shallow(<PasswordItem name="" date={currentDate} key="" hash="" />);
    expect(wrapper.find(".password-date").text()).toContain(currentDate);
  });
});
