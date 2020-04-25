import React from "react";
import { render } from "@testing-library/react";
import PublicImageList from "../components/PublicImageList";

test("PublicImageList.test.js", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Page/i);
  expect(linkElement).toBeInTheDocument();
});
