import React from "react";
import renderer from "react-test-renderer";
import Topbar from "./Topbar";
import { BrowserRouter } from "react-router-dom";

it("", () => {
  // cont wrapper = shallow(<Header/>);
  // console.log(wrapper.debug());

  const tree = renderer
    .create(
      <BrowserRouter>
        <Topbar />
      </BrowserRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
