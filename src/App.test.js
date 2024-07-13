import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  expect(screen.getByTestId("header")).toBeInTheDocument();
  expect(screen.getByTestId("contact")).toBeInTheDocument();
  expect(screen.getByTestId("experience")).toBeInTheDocument();
  expect(screen.getByTestId("education")).toBeInTheDocument();
  expect(screen.getByTestId("skills")).toBeInTheDocument();
  expect(screen.getByTestId("about")).toBeInTheDocument();
});
