import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";
import { Header } from "../../components/Header";

describe("Header component", () => {
  it("renders correctly", () => {
    render(<Header title="Mock Testing" />);

    expect(screen.getByText("Mock Testing")).toBeInTheDocument();
  });
});
