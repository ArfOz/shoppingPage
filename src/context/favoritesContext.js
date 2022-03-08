import { createContext, useReducer } from "react";
import { FavoriteReducer } from "./favoritesReducer";

export const FavoriteCartContext = createContext();

const storage = localStorage.getItem("favorite")
  ? JSON.parse(localStorage.getItem("favorite"))
  : [];

const initialState = { favItems: storage };

const FavoriteContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(FavoriteReducer, initialState);

  const favorite = (payload) => {
    dispatch({ type: "favorite", payload });
  };
  const contextValues = {
    favorite,
    ...state,
  };
  return (
    <FavoriteCartContext.Provider value={contextValues}>
      {children}
    </FavoriteCartContext.Provider>
  );
};

export default FavoriteContextProvider;
