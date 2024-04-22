import { render, screen } from "@testing-library/react";
import Header from "../header";

describe("Header component", () => {
  test("renders header correctly", () => {
    const { container } = render(<Header />);
    expect(container).toMatchSnapshot();
  });

  test("renders with correct navigation links", () => {
    render(<Header />);

    const homeLink = screen.getByText("Home");

    expect(homeLink).toBeInTheDocument();
    expect(homeLink.getAttribute("href")).toBe("/");
  });

  test("renders navigation links with hover styles", () => {
    render(<Header />);

    const homeLink = screen.getByText("Home");

    expect(homeLink).toHaveClass("hover:text-blue-700");
    expect(homeLink).toHaveClass("hover:underline");
  });
});
