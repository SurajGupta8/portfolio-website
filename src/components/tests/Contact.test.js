import React from "react";
import { render, screen } from "@testing-library/react";
import Contact from "../Contact";

test("renders the Contact component", () => {
  render(<Contact />);
  expect(screen.getByText("Contact")).toBeInTheDocument();
  expect(screen.getByText("Bihar, India")).toBeInTheDocument();
  expect(screen.getByText("Phone: +91 7481902859")).toBeInTheDocument();
  expect(
    screen.getByRole("link", { name: /surajkumargupta0092@gmail.com/i })
  ).toBeInTheDocument();
  expect(
    screen.getByRole("link", { name: /suraj-k-gupta/i })
  ).toBeInTheDocument();
});
