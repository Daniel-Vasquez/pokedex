import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

import PokemonsStyles from "../components/styles/Pokemons.module.css";
import { fetchPokemons } from "../api/fetchPokemons";
import { Pokemon } from "../types/types.d";

const Pokemons = () => {
  const [query, setQuery] = useState("");

  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    const fetchAllPokemons = async () => {
      const allPokemons = await fetchPokemons();

      setPokemons(allPokemons);
    };

    fetchAllPokemons();
  }, []);

  // console.log({ pokemons });
  
  return (
    <>
      <Header query={query} setQuery={setQuery} />
      <main className="main">
        <nav className={PokemonsStyles.nav}>
          {pokemons?.slice(0, 151).map((pokemon) => (
            <Link
              key={pokemon.id}
              className={PokemonsStyles["list-item"]}
              to={`/pokemons/${pokemon.name.toLowerCase()}`}
            >
              <img
                className={PokemonsStyles["list-item__icon"]}
                src={pokemon.imgSrc}
                alt={pokemon.name}
              />
              <div className={PokemonsStyles["list-item__text"]}>
                <span>{pokemon.name}</span>
                <span>{pokemon.id}</span>
              </div>
            </Link>
          ))}
        </nav>
      </main>
      <Footer />
    </>
  );
};

export default Pokemons;
