import React from "react";
import {
  StyledCardWrapper,
  StyledText,
  StyledProdImage,
  StyledPrice,
  StyledQuantity,
  StyledSpecPrice,
  ShoppingCard,
  StyledCardImage,
  IncDecButton,
  StyledFavorite,
} from "../../styles/productStyle";

import { FavoriteCartContext } from "../../context/favoritesContext";
import { FcLikePlaceholder, FcLike } from "react-icons/fc";

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

export const FavoriteItems = ({ title, imgSrc }) => {
  const { favorite, remove, favItems } = useContext(FavoriteCartContext);
  return (
    <ShoppingCard>
      <StyledCardImage src={imgSrc} alt={"OOOPS something went wrong..."} />
      <StyledText>{title}</StyledText>;
      <StyledFavorite>
        {!LikedorNot(product) ? (
          <FcLikePlaceholder size={20} onClick={() => fav(product)} />
        ) : (
          <FcLike size={20} onClick={() => removeFav(product)} />
        )}
      </StyledFavorite>
    </ShoppingCard>
  );
};
