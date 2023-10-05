import { render } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import { Title } from ".";

describe("Title", () => {
  test("should match snapshot", () => {
    const { container } = render(<Title level={1}>Test title</Title>);
    expect(container).toMatchSnapshot();
  });
  test("should render h1", () => {
    const component = render(<Title level={1}>Test title</Title>);
    const title = component.baseElement.querySelector("h1");
    expect(title).toBeDefined();
  });
});
