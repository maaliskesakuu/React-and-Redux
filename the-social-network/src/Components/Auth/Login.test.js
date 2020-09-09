import React from "react";
import { shallow } from "enzyme";
import LogIn from "./LogIn";

test("Login state should be updated upon input change", () => {
  const wrap = shallow(<LogIn></LogIn>);

  // console.log(wrap.debug());
  // console.log(wrap.state());

  expect(wrap.state()).toEqual({ email: "" });

  wrap.find("input#email").simulate("change", {
    target: { value: "hello" },
    id: "email",
  });

  console.log(wrap.state());

  expect(wrap.state()).toEqual({ email: "hello" });
});
