import React, { createContext } from "react";
import products from "../json/products.json"
export const ProductsContext = createContext()

const ProductsContextProvider = ({children}) =>{

    return(
        <ProductsContext.Provider value={products}>
            {children}
        </ProductsContext.Provider>
    )
}
export default ProductsContextProvider