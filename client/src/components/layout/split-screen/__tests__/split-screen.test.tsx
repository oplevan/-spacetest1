import { render, screen } from "@testing-library/react";
import SplitScreen from "../split-screen";
import SplitScreenLeft from "../split-screen-left";
import SplitScreenRight from "../split-screen-right";

describe("SplitScreen component", () => {
  test("matches the snapshot", () => {
    const { container } = render(
      <SplitScreen leftWidth={1} rightWidth={3}>
        <SplitScreenLeft>Left</SplitScreenLeft>
        <SplitScreenRight>Right</SplitScreenRight>
      </SplitScreen>
    );
    expect(container).toMatchSnapshot();
  });

  test("SplitScreen container has the correct amount of grid columns", () => {
    render(
      <SplitScreen leftWidth={2} rightWidth={4}>
        <SplitScreenLeft>Filters go here</SplitScreenLeft>
        <SplitScreenRight>Products go here</SplitScreenRight>
      </SplitScreen>
    );

    expect(screen.getByTestId("split-screen-container")).toHaveClass("lg:grid-cols-6");
  });

  test("renders with correct left and right widths", () => {
    render(
      <SplitScreen leftWidth={2} rightWidth={4}>
        <SplitScreenLeft>Filters go here</SplitScreenLeft>
        <SplitScreenRight>Products go here</SplitScreenRight>
      </SplitScreen>
    );

    expect(screen.getByText("Filters go here")).toHaveClass("lg:col-span-2");
    expect(screen.getByText("Products go here")).toHaveClass("lg:col-span-4");
  });

  test("applies additional className to the container", () => {
    render(
      <SplitScreen leftWidth={6} rightWidth={6} className="bg-slate-500">
        <SplitScreenLeft>Filters go here</SplitScreenLeft>
        <SplitScreenRight>Products go here</SplitScreenRight>
      </SplitScreen>
    );

    expect(screen.getByTestId("split-screen-container")).toHaveClass("bg-slate-500");
  });

  test("renders children correctly", () => {
    render(
      <SplitScreen leftWidth={6} rightWidth={6}>
        <SplitScreenLeft>Filters go here</SplitScreenLeft>
        <SplitScreenRight>Products go here</SplitScreenRight>
      </SplitScreen>
    );

    expect(screen.getByText("Filters go here")).toBeInTheDocument();
    expect(screen.getByText("Products go here")).toBeInTheDocument();
  });
});
