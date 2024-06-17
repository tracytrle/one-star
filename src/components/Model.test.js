import { render, screen } from "@testing-library/react";
import Model from "./Model";

describe("Model component", () => {
  it("renders the Model component", () => {
    render(<Model />);
    const modelElement = screen.getByTestId("model-component");
    expect(modelElement).toBeInTheDocument();

    const textElement = screen.getByText("Text Classification");
    expect(textElement).toBeInTheDocument();
  });
});
