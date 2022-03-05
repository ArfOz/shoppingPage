import React, {useContext} from 'react';
import {ShoppingCartContext} from '../../context/shoppingCartContext';
import CartItem from '../components/cart';

function Cart() {
  const {cartItems} = useContext(ShoppingCartContext)

  console.log("özkancart", cartItems)
  return (
    <>
       { cartItems.map(product =>  
       <CartItem 
          key={product.product_id}
          title={product.name}
          imgSrc={product.images[0].src}
          price={product.price}
          specPrice={product.special_price}
          currency={product.currency.symbol}
          stock={product.stock_qty}
          amount = {product.quantity}
          product = {product}

       />)
                }
    
   </>
  )
}
export default Cart
