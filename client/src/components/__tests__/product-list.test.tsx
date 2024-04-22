import { render, waitFor, screen } from "@testing-library/react";
import ProductList from "../product-list";
import { useFilters } from "../../context/filters-context";

// Mocking useFilters hook
jest.mock("../../context/filters-context");

const mockedUseFiltersContext = useFilters as jest.Mock;
const mockProducts = [
  { id: 1, name: "Vauxhall Astra", price: 3500 },
  { id: 2, name: "Audi A6", price: 15500 },
];

describe("ProductList component", () => {
  test("renders loading message when isLoading is true", () => {
    mockedUseFiltersContext.mockReturnValueOnce({ filteredProducts: [], isLoading: true });
    render(<ProductList />);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  test("renders products when isLoading is false", async () => {
    mockedUseFiltersContext.mockReturnValueOnce({ filteredProducts: mockProducts, isLoading: false });

    render(<ProductList />);

    await waitFor(() => {
      expect(screen.getByText("Vauxhall Astra")).toBeInTheDocument();
    });
    expect(screen.getByText("Audi A6")).toBeInTheDocument();
  });

  test("renders correct number of products", async () => {
    mockedUseFiltersContext.mockReturnValueOnce({ filteredProducts: mockProducts, isLoading: false });

    render(<ProductList />);

    await waitFor(() => {
      expect(screen.getAllByTestId("product-item")).toHaveLength(2);
    });
  });
});
