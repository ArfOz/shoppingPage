import React, { useContext, useState, useEffect } from "react";
import {
  StyledCardWrapper,
  StyledText,
  StyledProdImage,
  StyledPrice,
  StyledQuantity,
  StyledSpecPrice,
  IncDecButton,
  StyledFavorite,
} from "../../styles/productStyle";
import { ShoppingCartContext } from "../../context/shoppingCartContext";
import { FavoriteCartContext } from "../../context/favoritesContext";
import { FcLikePlaceholder, FcLike } from "react-icons/fc";

export const SingleProduct = ({
  title,
  imgSrc,
  price,
  specPrice,
  stock,
  currency,
  product,
}) => {
  const [quant, setQuant] = useState(1);

  const { addCart, cartItems, quantity } = useContext(ShoppingCartContext);
  const { favorite, remove, favItems } = useContext(FavoriteCartContext);

  const IncrementItem = () => {
    setQuant(quant + 1);
  };
  const DecreaseItem = () => {
    setQuant((quant) => Math.max(quant - 1, 0));
  };

  const added = (product) => {
    const myItem = !!cartItems.find(
      (item) => item.product_id === product.product_id
    );
    return myItem;
  };

  const LikedorNot = (product) => {
    const favItem = !!favItems.find(
      (item) => item.product_id === product.product_id
    );
    return favItem;
  };

  const fav = (product) => {
    favorite(product);
    console.log("productssssssss", product);
  };
  const removeFav = (product) => {
    remove(product);
    console.log("productssssssss", product);
  };

  return (
    <StyledCardWrapper>
      <StyledProdImage src={imgSrc} alt={"OOOPS something went wrong..."} />
      <StyledText>{title}</StyledText>
      <StyledQuantity>Kalan Adet: {stock}</StyledQuantity>
      <StyledPrice>
        {" "}
        Fiyat{" "}
        <span style={{ textDecorationLine: "line-through" }}>
          {price} {currency}{" "}
        </span>
      </StyledPrice>
      <StyledSpecPrice>
        İndirimli Fiyat: {specPrice} {currency}
      </StyledSpecPrice>

      {!added(product) && (
        <button onClick={() => addCart(product)}>Sepete ekle</button>
      )}
      {added(product) && (
        <IncDecButton>
          <button onClick={() => DecreaseItem()}>-</button>
          <>{quant}</>
          <button onClick={() => IncrementItem()}>+</button>
          <button onClick={() => quantity(product, { quant })}>Ekle</button>
        </IncDecButton>
      )}
      <StyledFavorite>
        {!LikedorNot(product) ? (
          <FcLikePlaceholder size={20} onClick={() => fav(product)} />
        ) : (
          <FcLike size={20} onClick={() => removeFav(product)} />
        )}
      </StyledFavorite>
    </StyledCardWrapper>
  );
};
