import { render, screen, fireEvent } from "@testing-library/react";
import Filters from "../filters";
import { FiltersProvider, useFilters } from "../../context/filters-context";
import { FiltersContextType } from "@/src/types/filters";

const mockedUseFiltersContext = useFilters as jest.Mock<FiltersContextType>;

// Mocking the useFilters hook
jest.mock("../../context/filters-context", () => ({
  useFilters: jest.fn(),
}));

describe("Filters component", () => {
  test("renders properly", () => {
    const mockSetSearch = jest.fn();
    const mockSetShowCheapestItems = jest.fn();
    const mockUseFilters = jest.fn(() => ({
      search: "",
      setSearch: mockSetSearch,
      showCheapestItems: true,
      setShowCheapestItems: mockSetShowCheapestItems,
    }));

    // Mocking the FiltersProvider to provide context for testing
    mockedUseFiltersContext.mockImplementationOnce(({ children }) => children);
  });
});
