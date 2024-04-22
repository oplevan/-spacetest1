import { gridCols, colSpan } from "../classnames";

// I believe, there's no need to write tests for cn function
// since it's a function provided by a third-party package.

describe("gridCols()", () => {
  test("should return the correct 'lg:grid-cols-*' class for valid input", () => {
    expect(gridCols(1)).toBe("lg:grid-cols-1");
    expect(gridCols(2)).toBe("lg:grid-cols-2");
    expect(gridCols(3)).toBe("lg:grid-cols-3");
    expect(gridCols(4)).toBe("lg:grid-cols-4");
    expect(gridCols(5)).toBe("lg:grid-cols-5");
    expect(gridCols(6)).toBe("lg:grid-cols-6");
    expect(gridCols(7)).toBe("lg:grid-cols-7");
    expect(gridCols(8)).toBe("lg:grid-cols-8");
    expect(gridCols(9)).toBe("lg:grid-cols-9");
    expect(gridCols(10)).toBe("lg:grid-cols-10");
    expect(gridCols(11)).toBe("lg:grid-cols-11");
    expect(gridCols(12)).toBe("lg:grid-cols-12");
  });

  test("should return default 'lg:grid-cols-1' class for invalid input", () => {
    expect(gridCols(0)).toBe("lg:grid-cols-1");
    expect(gridCols(13)).toBe("lg:grid-cols-1");
    expect(gridCols(-1)).toBe("lg:grid-cols-1");
    expect(gridCols(Infinity)).toBe("lg:grid-cols-1");
    expect(gridCols(NaN)).toBe("lg:grid-cols-1");
  });
});

describe("colSpan()", () => {
  test("should return the correct 'lg:col-span-*' class for valid input", () => {
    expect(colSpan(1)).toBe("lg:col-span-1");
    expect(colSpan(2)).toBe("lg:col-span-2");
    expect(colSpan(3)).toBe("lg:col-span-3");
    expect(colSpan(4)).toBe("lg:col-span-4");
    expect(colSpan(5)).toBe("lg:col-span-5");
    expect(colSpan(6)).toBe("lg:col-span-6");
    expect(colSpan(7)).toBe("lg:col-span-7");
    expect(colSpan(8)).toBe("lg:col-span-8");
    expect(colSpan(9)).toBe("lg:col-span-9");
    expect(colSpan(10)).toBe("lg:col-span-10");
    expect(colSpan(11)).toBe("lg:col-span-11");
    expect(colSpan(12)).toBe("lg:col-span-12");
  });

  test("should return default 'lg:col-span-1' class for invalid input", () => {
    expect(colSpan(0)).toBe("lg:col-span-1");
    expect(colSpan(13)).toBe("lg:col-span-1");
    expect(colSpan(-1)).toBe("lg:col-span-1");
    expect(colSpan(Infinity)).toBe("lg:col-span-1");
    expect(colSpan(NaN)).toBe("lg:col-span-1");
  });
});
