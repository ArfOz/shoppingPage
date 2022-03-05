import React from "react";
import MyRouter from "./router/router";

import { Footer } from "./pages/footer/footer";
import ShoppingCartContextProvider from "./context/shoppingCartContext";
import ProductsContextProvider from "./context/productsContext";


function App() {
  return (
  <ProductsContextProvider>
      <ShoppingCartContextProvider>
        <Footer />
        <MyRouter />
      </ShoppingCartContextProvider> 
  </ProductsContextProvider>
 
 
  );
}

export default App;
