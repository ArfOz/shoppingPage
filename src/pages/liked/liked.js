import React, { useContext } from "react";
import { FavoriteCartContext } from "../../context/favoritesContext";
import { FavoriteItems } from "../components/favoriteItems";

const Liked = () => {
  const { favItems } = useContext(FavoriteCartContext);
  console.log("arif", favItems);
  return (
    <>
      {favItems.map((product) => (
        <FavoriteItems
          key={product.product_id}
          title={product.name}
          imgSrc={product.images[0].src}
          // price={product.price}
          // specPrice={product.special_price}
          // currency={product.currency.symbol}
          // stock={product.stock_qty}
          // amount={product.quantity}
          // product={product}
        />
      ))}
    </>
  );
};

export default Liked;
