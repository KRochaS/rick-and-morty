import { ReactNode } from "react";



export interface CharacterSpecie {
    Human: string;
    Alien: string;
};

export interface CharacterStatus {
    Alive: string;
    Dead: string;
    unknown: string;
};

export interface Character {
    __typename: string;
    id: string;
    name: string;
    image: string;
    status: keyof CharacterStatus;
    species: keyof CharacterSpecie;
}

export interface CharacterProviderProps {
    children: ReactNode;
}