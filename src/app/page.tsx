import { CardList } from "@/components/CardList";
import { Header } from "@/components/Header";
import { Character } from "@/models/character";
import Link from "next/link";
import { client } from "../apollo/apolloConfig";
import { GET_ALL_CHARACTERS } from "../apollo/apolloQuerie";

export default async function Home() {
  const { data } = await client.query({ query: GET_ALL_CHARACTERS });

  const characters = data.characters.results;

  return (
    <div>
      <main className="flex flex-col gap-4 bg-gray-50 p-6 text-gray-900">
        <Header title="Rick & Morty - Lista" />

        <div className="flex cursor-pointer flex-col gap-4 md:grid lg:grid-cols-3">
          {characters.map((character: Character) => {
            return (
              <Link key={character.id} href={`/character/${character.id}`}>
                <CardList image={character.image} name={character.name} />
              </Link>
            );
          })}
        </div>
      </main>
    </div>
  );
}
