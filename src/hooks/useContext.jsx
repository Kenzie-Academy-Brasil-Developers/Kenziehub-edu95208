import { useContext } from "react";
import { UserContext } from "../providers/UserContext";
export function useContextIm() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("usePokemon deve ser usado dentro de um PokemonProvider");
  }
  return context;
}