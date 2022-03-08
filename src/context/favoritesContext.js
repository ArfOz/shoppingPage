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
    dispatch({ type: "addFav", payload });
  };
  const remove = (payload) => {
    dispatch({ type: "removeFav", payload });
  };
  const contextValues = {
    favorite,
    remove,
    ...state,
  };
  return (
    <FavoriteCartContext.Provider value={contextValues}>
      {children}
    </FavoriteCartContext.Provider>
  );
};

export default FavoriteContextProvider;
