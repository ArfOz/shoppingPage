import React, {useContext, useState} from 'react'
import {StyledCardWrapper, StyledText, StyledProdImage, StyledPrice, StyledQuantity, StyledSpecPrice, ShoppingCard, StyledCardImage, IncDecButton} from "../../styles/productStyle"
import {ShoppingCartContext} from '../../context/shoppingCartContext';

const CartItem = ({title,imgSrc, specPrice, stock, currency, amount, product}) => {
  const {remove, quantity} = useContext(ShoppingCartContext)
  const [total, setTotal] = useState(amount)
  const [totalAmount, setTotalAmount] = useState(amount * specPrice)
  

  const IncrementItem = () => {
    setTotal(total + 1);
    setTotalAmount(specPrice * (total+1))
  }
  const DecreaseItem = () => {
    setTotal((total) => (Math.max(total - 1,0)));
    setTotalAmount(specPrice * (total-1))
  }

  const updateCart = () =>{
    if(total === 0){
      remove(product)
    }
    else{
      quantity(product, total)
    }

  }
  return (
    <ShoppingCard>
        <StyledCardImage src={imgSrc} alt={"OOOPS something went wrong..."} />
        <StyledText>{title}</StyledText>
        <StyledQuantity>Kalan Adet: {stock}</StyledQuantity>
        <StyledSpecPrice>İndirimli Fiyat: {specPrice} {currency}</StyledSpecPrice>

        <IncDecButton>
          <button onClick={()=> DecreaseItem()}>-</button>
          <>{ total}</>
          <button onClick={() => IncrementItem()}>+</button>
          <button onClick={()=> updateCart(product, amount)}>Güncelle</button>
        </IncDecButton>
        <div>Tutar: {totalAmount} </div>        

    </ShoppingCard>

  )
}

export default CartItem