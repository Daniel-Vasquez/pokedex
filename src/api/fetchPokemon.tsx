import { PokemonDetails } from "../types/types";
import { formatName } from '../utils/utils'

const URL_API = 'https://pokeapi.co/api/v2/pokemon'

export async function fetchPokemon(name: string): Promise<PokemonDetails> {
  const reponse = await fetch(`${URL_API}/${formatName(name)}`)

  if (!reponse.ok) {
    throw new Error('Hubo un error')
  }

  const results = await reponse.json()

  const pokemon = {
    name: results.name,
    id: results.id,
    imgSrc: results.sprites.front_default,
    hp: results.stats[0].base_stat,
    attack: results.stats[1].base_stat,
    defense: results.stats[2].base_stat,
    specialAttack: results.stats[3].base_stat,
    speed: results.stats[5].base_stat
  }

  return pokemon
}