import React from "react";
import MyRouter from "./router/router";

import ShoppingCartContextProvider from "./context/shoppingCartContext";
import ProductsContextProvider from "./context/productsContext";
import FavoriteContextProvider from "./context/favoritesContext";

function App() {
  return (
    <ProductsContextProvider>
      <FavoriteContextProvider>
        <ShoppingCartContextProvider>
          <MyRouter />
        </ShoppingCartContextProvider>
      </FavoriteContextProvider>
    </ProductsContextProvider>
  );
}

export default App;
