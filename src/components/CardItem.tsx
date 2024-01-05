import { CharacterContext } from "@/context/CharacterContext";
import { characterSpecie, characterStatus } from "@/utils/character";
import { useContext } from "react";

import { CardItemContent } from "./CardItemContent";
import { CardItemHeader } from "./CardItemHeader";

export function CardItem() {
  const contextValue = useContext(CharacterContext);

  const character = contextValue?.character;

  return (
    <div
      className="bg-cello-50 border-cello-50 
                 flex w-80 flex-col items-center gap-5
                 rounded-md border px-5 py-6 shadow-lg"
    >
      <CardItemHeader />

      <section className="flex gap-10">
        <CardItemContent
          data-testid="species"
          title="Espécie:"
          info={
            character?.species !== undefined
              ? characterSpecie[character.species]
              : ""
          }
        />

        <CardItemContent
          data-testid="status"
          title="Status:"
          info={
            character?.status !== undefined
              ? characterStatus[character.status]
              : ""
          }
        />
      </section>
    </div>
  );
}
