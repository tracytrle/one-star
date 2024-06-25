import { render, screen, fireEvent } from "@testing-library/react";
import TextFieldBase from "./TextFieldBase";

describe("TextFieldBase component", () => {
  it("renders the TextFieldBase compoenent", () => {
    render(<TextFieldBase />);
    const textFieldBaseElement = screen.getByTestId(
      "text-field-base-component"
    );
    expect(textFieldBaseElement).toBeInTheDocument();

    const inputElement = screen.getByPlaceholderText("Message");
    expect(inputElement).toBeInTheDocument();
  });
  describe("TextFieldBase component fire event", () => {
    it("should change input value", () => {
      render(<TextFieldBase />);
      const inputElement = screen.getByPlaceholderText("Message");
      fireEvent.change(inputElement, { target: { value: "Hello" } });
      expect(inputElement.value).toBe("Hello");
    });
  });
});
