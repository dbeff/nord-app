import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Spinner from "../Spinner";

test("<Spinner />", () => {
  render(<Spinner />);

  const svgElement = screen.getByText(
    (content, element) => element?.tagName.toLowerCase() === "svg"
  );
  expect(svgElement).toBeInTheDocument();
  expect(svgElement.classList.toString()).toContain("animate-spin");
});
