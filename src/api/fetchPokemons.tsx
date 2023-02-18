import { formatName } from "../utils/utils";
import { Pokemon } from "../types/types";

const API_POKEMONS = "https://unpkg.com/pokemons@1.1.0/pokemons.json";

export async function fetchPokemons(): Promise<Pokemon[]> {
  const response = await fetch(API_POKEMONS);

  if (!response.ok) {
    throw new Error("Hubo un error");
  }

  const results = await response.json();

  // console.log({ results });

  const pokemons = results.results.map((pokemon: any) => ({
    name: pokemon.name,
    id: pokemon.national_number,
    imgSrc: `https://img.pokemondb.net/sprites/black-white/anim/normal/${formatName(
      pokemon.name.toLowerCase()
    )}.gif`,
  }));

  const uniquePokemons = pokemons.filter(
    (pokemon: any, index: number) =>
      pokemons.findIndex((other: any) => other.id === pokemon.id) === index
  );

  return uniquePokemons;
}
