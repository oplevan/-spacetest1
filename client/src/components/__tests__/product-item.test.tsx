import { screen, render } from "@testing-library/react";
import ProductItem from "../product-item";

describe("ProductItem component", () => {
  test("renders product name and price correctly", () => {
    const product = {
      id: 1,
      name: "Test Product",
      price: 10.99,
    };

    render(<ProductItem data={product} />);

    expect(screen.getByText("Test Product")).toBeInTheDocument();
    expect(screen.getByText("£10.99")).toBeInTheDocument();
  });
});
