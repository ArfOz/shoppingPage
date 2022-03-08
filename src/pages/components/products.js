import React, { useContext } from "react";
// import products from "../json/products.json";
import { SingleProduct } from "./singleProduct";
import { Products } from "./../../styles/productsStyle";
import { ProductsContext } from "../../context/productsContext";

const ProductPage = () => {
  const products = useContext(ProductsContext);
  return (
    <Products>
      {products.map((prod, index) => (
        <SingleProduct
          key={prod.production_id}
          title={prod.name}
          imgSrc={prod.images[0].src}
          price={prod.price}
          specPrice={prod.special_price}
          currency={prod.currency.symbol}
          stock={prod.stock_qty}
          product={prod}
        />
      ))}
    </Products>
  );
};

export default ProductPage;
