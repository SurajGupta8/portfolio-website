import React from "react";
import { render, screen } from "@testing-library/react";
import Skills from "../Skills";

test("renders the Skills component", () => {
  render(<Skills />);
  expect(screen.getByText("Skills & Abilities")).toBeInTheDocument();
  expect(
    screen.getByText("Fluent Languages – English, Hindi")
  ).toBeInTheDocument();
  expect(
    screen.getByText(
      "Programming Languages – C, JavaScript, TypeScript, Python"
    )
  ).toBeInTheDocument();
  expect(
    screen.getByText(
      "Libraries/Frameworks – HTML5, CSS3, React.js, Express.js, Node.js, Redux, Jest, Mocha"
    )
  ).toBeInTheDocument();
  expect(
    screen.getByText("Database/Middleware – MySQL, MongoDB, GraphQL")
  ).toBeInTheDocument();
  expect(
    screen.getByText("Tools – Jira, Sumologic, xMatters, Okta")
  ).toBeInTheDocument();
  expect(screen.getByText("Version control: Git, GitHub")).toBeInTheDocument();
});
