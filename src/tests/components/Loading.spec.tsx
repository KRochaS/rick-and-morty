import { Loading } from "@/components/Loading";
import { render, screen } from "@testing-library/react";

describe("Loading component", () => {
  it("renders the loading spinner", () => {
    render(<Loading />);

    const loaderElement = screen.getByTestId("loader");
    expect(loaderElement).toBeInTheDocument();
  });
});
