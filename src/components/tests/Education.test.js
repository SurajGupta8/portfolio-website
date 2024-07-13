import React from "react";
import { render, screen } from "@testing-library/react";
import Education from "../Education";

test("renders the Education component", () => {
  render(<Education />);
  expect(screen.getByText("Education")).toBeInTheDocument();
  expect(
    screen.getByText("Mahatma Gandhi Central University, BTech")
  ).toBeInTheDocument();
  expect(screen.getByText("2017 - 2021")).toBeInTheDocument();
  expect(
    screen.getByText("Computer Science and Engineering")
  ).toBeInTheDocument();
});
