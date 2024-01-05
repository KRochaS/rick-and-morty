import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";
import { CardList } from "../../components/CardList";

describe("CardList component", () => {
  it("renders correctly", () => {
    const mockProps = {
      image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
      name: "Mock Name",
    };

    render(<CardList {...mockProps} />);

    const imageElement = screen.getByRole("img");

    expect(imageElement).toHaveAttribute("src");
    expect(screen.getByText(mockProps.name)).toBeInTheDocument();
  });
});
