import React from "react";
import { render, screen } from "@testing-library/react";
import Experience from "../Experience";

test("renders the Experience component", () => {
  render(<Experience />);
  expect(screen.getByText("Experience")).toBeInTheDocument();
  expect(
    screen.getByText("Deltek | Replicon | Software Engineer I")
  ).toBeInTheDocument();
  expect(screen.getByText("Oct 2021 - Present")).toBeInTheDocument();
  expect(
    screen.getByText(
      "Enhanced user experience with intuitive interface design for browser extension of ZeroTime."
    )
  ).toBeInTheDocument();
  expect(
    screen.getByText("Pantech Solutions Pvt Ltd | Internship Trainee")
  ).toBeInTheDocument();
  expect(screen.getByText("Jul 2020 – Dec 2020")).toBeInTheDocument();
});
