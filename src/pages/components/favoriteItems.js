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
} from "../../styles/productStyle";

export const FavoriteItems = ({ title, imgSrc }) => {
  return (
    <ShoppingCard>
      <StyledCardImage src={imgSrc} alt={"OOOPS something went wrong..."} />
      <StyledText>{title}</StyledText>;
    </ShoppingCard>
  );
};
