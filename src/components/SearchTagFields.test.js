import React from "react";
import { render } from "@testing-library/react";
import SearchTagsField from "../components/SearchTagsField";

test("SearchTagsField.test.js", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Search/i);
  expect(linkElement).toBeInTheDocument();
});
