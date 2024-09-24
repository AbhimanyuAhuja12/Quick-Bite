import { render, screen } from "@testing-library/react";
import RestaurantCard from "../ResturantCard";
import MOCK_DATA from "../Mocks/resCardData.json"
import "@testing-library/jest-dom";

test("should restaurant card rendered with props", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);

  const name = screen.getByText("Burger King");

  expect(name).toBeInTheDocument();
});
