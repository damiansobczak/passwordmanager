import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import PasswordList from "./PasswordList";

describe("<PasswordList />", () => {
  const passwords = [{ name: "Google", password: "123dsadasd", date: "12-04-2019" }, { name: "Youtube", password: "wwwwwsda", date: "14-05-2019" }, { name: "Facebook", password: "111111111111", date: "17-06-2019" }];
  it("renders correctly", () => {
    const tree = renderer.create(<PasswordList passwords={passwords} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders password items", () => {
    const wrapper = shallow(<PasswordList passwords={passwords} />);
    expect(wrapper.find("PasswordItem")).toHaveLength(3);
  });
});
