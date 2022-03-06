import React from "react";
import MyRouter from "./router/router";

import ShoppingCartContextProvider from "./context/shoppingCartContext";
import ProductsContextProvider from "./context/productsContext";


function App() {
  return (
  <ProductsContextProvider>
      <ShoppingCartContextProvider>
        <MyRouter />
      </ShoppingCartContextProvider> 
  </ProductsContextProvider>
 
 
  );
}

export default App;
