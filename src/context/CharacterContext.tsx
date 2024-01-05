"use client";

import { createContext, useState } from "react";
import { Character, CharacterProviderProps } from "../models/character";

interface CharacterContextProps {
  character: Character | null;
  setCharacter: (character: Character | null) => void;
}

export const CharacterContext = createContext<CharacterContextProps | null>(
  null,
);

export default function CharacterProvider({
  children,
}: CharacterProviderProps) {
  const [character, setCharacter] = useState<Character | null>(null);

  const contextValue: CharacterContextProps = {
    character,
    setCharacter,
  };

  return (
    <CharacterContext.Provider value={contextValue}>
      {children}
    </CharacterContext.Provider>
  );
}
