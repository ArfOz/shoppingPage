import React, {useContext, useState} from 'react'
import {StyledCardWrapper, StyledText, StyledProdImage, StyledPrice, StyledQuantity, StyledSpecPrice, IncDecButton, StyledFavorite} from "../../styles/productStyle"
import { ShoppingCartContext } from '../../context/shoppingCartContext'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';

export const SingleProduct = ({title,imgSrc, price, specPrice, stock, currency, product}) => {
  const [quant, setQuant] = useState(1)

  const { addCart, cartItems, quantity } = useContext(ShoppingCartContext)

  const IncrementItem = () => {
    setQuant(quant +1);
  }
  const DecreaseItem = () => {
    setQuant((quant) => (Math.max(quant - 1,0)));
  }

  const added = (product) =>{
    const myItem = !! cartItems.find(item => item.product_id === product.product_id)
    return myItem
  }
  return (
    <StyledCardWrapper>
        <StyledProdImage src={imgSrc} alt={"OOOPS something went wrong..."} />
        <StyledText>{title}</StyledText>
        <StyledQuantity>Kalan Adet: {stock}</StyledQuantity>
        <StyledPrice> Fiyat <span style={{textDecorationLine:'line-through'}}>{price} {currency} </span></StyledPrice>
        <StyledSpecPrice>İndirimli Fiyat: {specPrice} {currency}</StyledSpecPrice>

        {        
            !added(product) && <button 
            onClick={() => addCart(product)}
            >Sepete ekle</button>
        }
        {        
            added(product) &&
              <IncDecButton>
                <button onClick={()=> DecreaseItem()}>-</button>
                <>{ quant }</>
                <button onClick={() => IncrementItem()}>+</button>
                <button onClick={()=> quantity(product, {quant})}>Ekle
                </button>
              </IncDecButton>
        }
         <StyledFavorite>
          <FormControlLabel
            control={<Checkbox icon={<FavoriteBorder />} 
                  checkedIcon={<Favorite />}
              name="checkedH" />}
          />
          </StyledFavorite>
  
  
    </StyledCardWrapper>
  )
}
