import { render, screen } from "@testing-library/react";

import { CardItemContent } from "@/components/CardItemContent";
import { characterSpecie } from "@/utils/character";
import "@testing-library/jest-dom";

describe("CardItemContent component", () => {
  it("renders title and info correctly", () => {
    render(<CardItemContent title="Mock Title" info="Mock Info" />);
    const title = "Mock title";
    const info = "Mock info";

    expect(screen.getByText("Mock Title")).toBeInTheDocument();

    const { getByText } = render(<CardItemContent title={title} info={info} />);

    expect(getByText(title)).toBeInTheDocument();
    expect(getByText(info)).toBeInTheDocument();
  });

  it("renders species correctly from enum", () => {
    const mockCharacter = {
      species: "Human",
    };

    const speciesKey = mockCharacter.species as keyof typeof characterSpecie;

    render(
      <CardItemContent
        title="Espécie:"
        info={characterSpecie[speciesKey] || ""}
      />,
    );

    expect(screen.getByText("Espécie:")).toBeInTheDocument();
    expect(screen.getByText("Humano")).toBeInTheDocument();
  });

  it("renders species correctly from enum", () => {
    const mockCharacter = {
      species: "Human",
    };

    const speciesKey = mockCharacter.species as keyof typeof characterSpecie;

    render(
      <CardItemContent
        title="Espécie:"
        info={characterSpecie[speciesKey] || ""}
      />,
    );

    expect(screen.getByText("Espécie:")).toBeInTheDocument();
    expect(screen.getByText("Humano")).toBeInTheDocument();
  });
});
