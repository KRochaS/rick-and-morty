"use client";

import { client } from "@/apollo/apolloConfig";
import { GET_CHARACTER_BY_ID } from "@/apollo/apolloQuerie";
import { CardItem } from "@/components/CardItem";
import { Header } from "@/components/Header";
import { Loading } from "@/components/Loading";
import { CharacterContext } from "@/context/CharacterContext";
import { useContext, useEffect, useState } from "react";

interface CharacterProps {
  params: {
    id: string;
  };
}

export default function DetailCharacter({ params }: CharacterProps) {
  const contextValue = useContext(CharacterContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function handleDetailCharacter() {
      try {
        const id = Number(params.id);

        const { data } = await client.query({
          query: GET_CHARACTER_BY_ID,
          variables: { id },
        });

        if (contextValue?.setCharacter) {
          contextValue.setCharacter(data.character);
        }
        setIsLoading(false);
      } catch (error) {
        console.error("Erro na chamada do endpoint:", error);
        setIsLoading(false);
      }
    }

    handleDetailCharacter();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <main className="flex h-screen flex-col gap-4 bg-gray-50 p-6 text-gray-900">
        <Header title="Rick & Morty - Detalhe" />

        <div className="flex h-full items-center justify-center">
          <CardItem />
        </div>
      </main>
    </div>
  );
}
