import React, {useContext, useState} from 'react';
import {ShoppingCartContext} from '../../context/shoppingCartContext';
import CartItem from '../components/cart';

function Cart() {
  const {cartItems, total, checkout} = useContext(ShoppingCartContext)
  const [totalPrice, setTotalPrice] = useState()

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

{
                        cartItems.length > 0 && 
                        <div className="col-sm-3 p-3">
                            <div className="card card-body">
                                <p className="mb-1">Total Items</p>
                                {/* <h4 className=" mb-3 txt-right">{itemCount}</h4> */}
                                <p className="mb-1">Total Payment</p>
                                <h3 className="m-0 txt-right">{total}</h3>
                                <hr className="my-4"/>
                                <div className="text-center">
                                    <button type="button" className="btn btn-primary mb-2" onClick={checkout}>CHECKOUT</button>
                                    {/* <button type="button" className="btn btn-outlineprimary btn-sm" onClick={clearCart}>CLEAR</button> */}
                                </div>

                            </div>
                        </div>
                    }
    
   </>
  )
}
export default Cart
