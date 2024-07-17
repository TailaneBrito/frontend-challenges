import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("renders learn react link", () => {
    render(<App />);
    const linkElement = screen.getByText(/Board v1/i);
    expect(linkElement).toBeInTheDocument();
    const linkElement2 = screen.getByText(/Board v2/i);
    expect(linkElement2).toBeInTheDocument();
  });

  it("renders correctly again", () => {
    render(<App />);
  });
});
