/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import ReactDOM from "react-dom";
import { Link } from "./Link";

const LinkWrapper = (props) => <a {...props} />;

it("has a href attr when rendering w/ linkWrapper", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Link href="https://learnstorybook.com" LinkWrapper={LinkWrapper}>
      Link Text
    </Link>,
    div
  );
  expect(
    div.querySelector('a[href="https://learnstorybook.com"]')
  ).not.toBeNull();
  expect(div.textContent).toEqual("Link Text");

  ReactDOM.unmountComponentAtNode(div);
});
