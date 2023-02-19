import { useNavigate, useParams } from "react-router-dom";
import PokeballImg from "../assets/pokeball.png";
import BulbasaurImg from "../assets/bulbasaur.gif";
import PokemonStyles from "../components/styles/Pokemon.module.css";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { PokemonDetails } from "../types/types";
import { fetchPokemon } from "../api/fetchPokemon";
import LoadingScreen from "../components/LoadingScreen";
import { waitFor } from "../utils/utils";

// -1 para ir hacia atras.

const Pokemon = () => {
  const [pokemon, setPokemon] = useState<PokemonDetails>();
  const [isLoading, setIsLoading] = useState(false);
  const { name } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function getPokemon() {
      setIsLoading(true)
      await waitFor(500)
      const fetchedPokemon = await fetchPokemon(name as string);

      setPokemon(fetchedPokemon);
      setIsLoading(false)
    }

    getPokemon();
  }, [name]);

  if (isLoading || !pokemon) return <LoadingScreen />

  return (
    <>
      <button
        className={PokemonStyles["pokeball-button"]}
        onClick={() => navigate(-1)}
      >
        <img
          className={PokemonStyles["pokeball-img"]}
          src={PokeballImg}
          alt="Pokeball"
        />
        Go back
      </button>
      <div className={PokemonStyles.pokemon}>
        <main className={PokemonStyles["pokemon-info"]}>
          <div
            className={PokemonStyles["pokemon-info__title"]}>
            {pokemon?.name?.toUpperCase()}
          </div>
          <div>N# {pokemon?.id}</div>
          <div>
            <img
              className={PokemonStyles["pokemon-info__img"]}
              src={pokemon?.imgSrc}
              alt={pokemon?.name}
            />
          </div>
          <div className={PokemonStyles["info-text"]}>
            <div className={PokemonStyles["pokemon-info__text"]}>
              <p>HP:</p> 
              <p>{pokemon?.hp}</p>
            </div>
            <div className={PokemonStyles["pokemon-info__text"]}>
              <p>Attack:</p> 
              <p>{pokemon?.attack}</p>
            </div>
            <p className={PokemonStyles["pokemon-info__text"]}>
              <p>Defense:</p> 
              <p>{pokemon?.defense}</p>
            </p>
            <p className={PokemonStyles["pokemon-info__text"]}>
              <p>Special Attack:</p> 
              <p>{pokemon?.specialAttack}</p>
            </p>
            <p className={PokemonStyles["pokemon-info__text"]}>
              <p>Speed:</p> 
              <p>{pokemon?.speed}</p>
            </p>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Pokemon;
