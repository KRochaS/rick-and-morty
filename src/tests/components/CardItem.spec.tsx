import { CardItem } from "@/components/CardItem";
import { CharacterContext } from "@/context/CharacterContext";
import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import React from "react";

jest.mock(
  "next/image",
  () =>
    function Image({ src, alt }: any) {
      // eslint-disable-next-line @next/next/no-img-element
      return <img src={src} alt={alt} />;
    },
);

describe("CardItem component", () => {
  it("renders CardItem with correct context information", async () => {
    const mockCharacter = {
      species: "Human",
      status: "Alive",
    };
    jest
      .spyOn(React, "useContext")
      .mockReturnValue({ character: mockCharacter });

    render(<CardItem />);

    expect(screen.getByText("Espécie:")).toBeInTheDocument();
    await waitFor(() => {
      const contextValue = React.useContext(CharacterContext);

      expect(contextValue?.character?.species).toBe(mockCharacter.species);
    });
  });
});
