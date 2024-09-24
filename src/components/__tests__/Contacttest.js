import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

//mfor grouping the test cases describe is used
describe("Contact Us Page Test Cases", () => {
  test("should load contact us Component", () => {
    render(<Contact />); // it will be rendered to js dom

    const heading = screen.getByRole("heading");

    //Assertion
    expect(heading).toBeInTheDocument();
  });

  test("should load button inside Contact Component", () => {
    render(<Contact />); // it will be rendered to js dom

    const button = screen.getByRole("button");
    // const text = screen.getByText("Submit");

    //Assertion
    expect(button).toBeInTheDocument();
  });

  it("should load input name inside Contact Component", () => {
    render(<Contact />); // it will be rendered to js dom

    const inputName = screen.getByPlaceholderText("Name");

    //Assertion
    expect(inputName).toBeInTheDocument();
  });

  test("should load 2 input boxes", () => {
    render(<Contact />);

    //querying
    const inputBoxes = screen.getAllByRole("textbox");

    // console.log(inputBoxes); // return array of two items
    expect(inputBoxes.length).toBe(3);
  });
});
