import { Link } from "react-router-dom";
import PokemonPic from "../assets/pikachu.png";
import LocationPic from "../assets/pointer.png";
import ItemsPic from "../assets/pokeball.png";
import FooterStyle from "./styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={FooterStyle.footer}>
      <Link
        className={FooterStyle["footer-link"]}
        to="/pokemons"
        // onClick={(e) => e.preventDefault()}
      >
        <img
          className={FooterStyle["footer-icon"]}
          src={PokemonPic}
          alt="pokeball"
        />
        Pokemons
      </Link>

      <Link
        className={FooterStyle["footer-link"]}
        to="/items"
        onClick={(e) => e.preventDefault()}
      >
        <img
          className={FooterStyle["footer-icon"]}
          src={ItemsPic}
          alt="pokeball"
        />
        Items
      </Link>

      <Link
        className={FooterStyle["footer-link"]}
        to="/location"
        onClick={(e) => e.preventDefault()}
      >
        <img
          className={FooterStyle["footer-icon"]}
          src={LocationPic}
          alt="pokeball"
        />
        Map
      </Link>
    </footer>
  );
};

export default Footer;
