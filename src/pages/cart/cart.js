import React, { useContext, useState } from "react";
import { ShoppingCartContext } from "../../context/shoppingCartContext";
import CartItem from "../components/cart";

function Cart() {
  const { cartItems, total, checkout } = useContext(ShoppingCartContext);
  const [totalPrice, setTotalPrice] = useState();
  const shippingPrice = "50";
  return (
    <>
      {cartItems.map((product) => (
        <CartItem
          key={product.product_id}
          title={product.name}
          imgSrc={product.images[0].src}
          price={product.price}
          specPrice={product.special_price}
          currency={product.currency.symbol}
          stock={product.stock_qty}
          amount={product.quantity}
          product={product}
        />
      ))}

      {cartItems.length > 0 && (
        <div>
          <div>
            <p>Total Items</p>
            <h4>{cartItems.length}</h4>
            {total >= 3000 ? (
              <>
                <div>Kargo Ücretsiz</div>
                <h3>Toplam Tutar: {total}</h3>
              </>
            ) : (
              <>
                <div>Kargo ücreti 50 tl</div>
                <h3>Toplam Tutar: {(parseFloat(total) + 50.0).toFixed(2)}</h3>
              </>
            )}

            <hr />

            <div>
              <button type="button" onClick={checkout}>
                CHECKOUT
              </button>
              {/* <button type="button" className="btn btn-outlineprimary btn-sm" onClick={clearCart}>CLEAR</button> */}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default Cart;
