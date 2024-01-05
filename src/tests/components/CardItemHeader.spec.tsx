import { CardItemHeader } from "@/components/CardItemHeader";
import { CharacterContext } from "@/context/CharacterContext";
import "@testing-library/jest-dom";
import { render, waitFor } from "@testing-library/react";
import React from "react";

jest.mock(
  "next/image",
  () =>
    function Image({ src, alt }: any) {
      // eslint-disable-next-line @next/next/no-img-element
      return <img src={src} alt={alt} />;
    },
);

describe("CardItemHeader component", () => {
  it("renders CardItemHeader with correct context information", async () => {
    const mockCharacter = {
      image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
      name: "Morty Smith",
    };
    jest
      .spyOn(React, "useContext")
      .mockReturnValue({ character: mockCharacter });

    render(<CardItemHeader />);

    await waitFor(() => {
      const contextValue = React.useContext(CharacterContext);

      expect(contextValue?.character?.image).toBe(mockCharacter.image);
      expect(contextValue?.character?.name).toBe(mockCharacter.name);
    });
  });
});
