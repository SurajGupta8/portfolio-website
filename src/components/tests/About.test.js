import React from "react";
import { render, screen } from "@testing-library/react";
import About from "../About";

test("renders the About component", () => {
  render(<About />);
  expect(screen.getByText("About Me")).toBeInTheDocument();
  expect(
    screen.getByText(
      "Highly skilled and detail-oriented software developer with 3 years of experience designing, developing, and deploying enterprise-level applications. Proficient in multiple programming languages, software development methodologies, and database management systems. Strong problem-solving skills and ability to work effectively in a team-based environment."
    )
  ).toBeInTheDocument();
});
