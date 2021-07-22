export interface Pokemon {
    id: number;
    name: string;
    picture: string;
    color?: string;
}

export interface FullPokemon {
    id: number;
    name: string;
    picture: string;
    color?: string;
    height: number,
    weight: number
}

