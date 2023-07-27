import { render, screen, fireEvent } from "@testing-library/react";
// import { logRoles } from "@testing-library/react";
import App from "./App";

test("button has correct initial color, and updates when clicked", () => {
  // DOM 내에 어떤 role 들이 있는지 확인하는 구문
  // const { container } = render(<App />);
  // logRoles(container);

  render(<App />);

  // find an element with a role of button and text of 'Change to blue'
  const colorButton = screen.getByRole("button", { name: "Change to blue" });

  // expect the background color to be red
  expect(colorButton).toHaveStyle({ backgroundColor: "red" });

  // click button
  fireEvent.click(colorButton);

  // expect the background color to be blue
  expect(colorButton).toHaveStyle({ backgroundColor: "blue" });

  // expect the button text to be 'Change to red'
  expect(colorButton).toHaveTextContent("Change to red");
});

test("initial conditions", () => {
  render(<App />);

  // check that the button starts out enabled
  const colorButton = screen.getByRole("button", {
    name: "Change to blue",
  });
  expect(colorButton).toBeEnabled();

  // check that the checkbox starts out unchecked
  const checkbox = screen.getByRole("checkbox");
  expect(checkbox).not.toBeChecked();
});

test("button is disabled when checkbox is checked, and vice versa", () => {
  render(<App />);

  const checkbox = screen.getByRole("checkbox");
  const colorButton = screen.getByRole("button");

  fireEvent.click(checkbox);
  expect(colorButton).toBeDisabled();

  fireEvent.click(checkbox);
  expect(checkbox).toBeEnabled();
});
