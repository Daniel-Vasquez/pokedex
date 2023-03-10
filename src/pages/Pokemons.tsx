import { useEffect, useState } from "react";
import { fetchPokemons } from "../api/fetchPokemons";
import { Pokemon } from "../types/types.d";
import { waitFor } from "../utils/utils";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LoadingScreen from "../components/LoadingScreen";
import PokemonsStyles from "../components/styles/Pokemons.module.css";

function Pokemons() {
  const [query, setQuery] = useState<string>("");
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchAllPokemons = async () => {
      setIsLoading(true);
      await waitFor(750); // To wait 'X' seconds.
      const allPokemons = await fetchPokemons();

      setPokemons(allPokemons);
      setIsLoading(false);
    };

    fetchAllPokemons();
  }, []);

  const filterPokemons = pokemons?.slice(0, 151).filter((pokemon) => {
    return pokemon.name.toLowerCase().match(query.toLowerCase());
  });

  if (isLoading || !pokemons) {
    return <LoadingScreen />;
  }

  return (
    <>
      <Header query={query} setQuery={setQuery} />
      <main className="main">
        <nav className={PokemonsStyles.nav}>
          {filterPokemons?.slice(0, 151).map((pokemon) => (
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
