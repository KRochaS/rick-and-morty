import { CharacterContext } from "@/context/CharacterContext";
import Image from "next/image";
import { useContext } from "react";

export function CardItemHeader() {
  const contextValue = useContext(CharacterContext);

  const character = contextValue?.character;

  return (
    <div className="flex w-full justify-between">
      <div className="flex items-center gap-3">
        <Image
          className="h-16 w-16 rounded-full"
          src={character?.image || ""}
          alt=""
          width={48}
          height={48}
        />
        <div>
          <h1 className="text-md font-bold"> {character?.name} </h1>
        </div>
      </div>
    </div>
  );
}
