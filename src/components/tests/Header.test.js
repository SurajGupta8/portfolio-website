import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "../Header";

test("renders the Header component", () => {
  render(<Header />);
  expect(screen.getByText("Suraj Kumar Gupta")).toBeInTheDocument();
  expect(screen.getByText("Software Engineer")).toBeInTheDocument();
});
