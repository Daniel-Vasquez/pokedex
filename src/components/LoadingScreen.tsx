import Pokedex from "../assets/pokedex.png";
import LoadingScreenStyles from "./styles/LoadingScreen.module.css";

const LoadingScreen = () => {
  return (
    <div className={LoadingScreenStyles["loading-screen"]}>
      <img
        className={LoadingScreenStyles["loading-screen__icon"]}
        src={Pokedex}
        alt="Pokedex"
      />
    </div>
  );
};

export default LoadingScreen;
