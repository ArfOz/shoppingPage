const Storage = (cartItems) => {
  localStorage.setItem(
    "shoppingCart",
    JSON.stringify(cartItems.length > 0 ? cartItems : [])
  );
};

export const totalAmount = (cartItems) => {
  Storage(cartItems);
  let itemsCount = cartItems.reduce(
    (total, product) => total + product.quantity,
    0
  );
  let total = cartItems
    .reduce(
      (total, product) => total + product.special_price * product.quantity,
      0
    )
    .toFixed(2);
  return { itemsCount, total };
};

export const ShoppingCartReducer = (state, action) => {
  switch (action.type) {
    case "addCart":
      if (
        !state.cartItems.find(
          (item) => item.product_id === action.payload.product_id
        )
      ) {
        state.cartItems.push({
          ...action.payload,
          quantity: 1,
        });
      }
      return {
        ...state,
        ...totalAmount(state.cartItems),
        cartItems: [...state.cartItems],
      };
    case "remove":
      return {
        ...state,
        ...totalAmount(
          state.cartItems.filter(
            (item) => item.product_id !== action.payload.product_id
          )
        ),
        cartItems: [
          ...state.cartItems.filter(
            (item) => item.product_id !== action.payload.product_id
          ),
        ],
      };
    case "quantity":
      const quant = state.cartItems.filter(
        (item) => item.product_id === action.payload.product_id
      )[0];
      console.log("deneme", quant, action.quantity);
      quant.quantity = action.quantity;
      console.log("özkan", quant.quantity);
      // console.log("arif", state.cartItems[state.cartItems.findIndex(item => item.id === action.payload.id)].quantity)
      return {
        ...state,
        ...totalAmount(state.cartItems),
        cartItems: [...state.cartItems],
      };
    case "checkout":
      return {
        cartItems: [],
        ...totalAmount([]),
      };

    case "buy":
      return {
        ...state,
      };
    default:
      return state;
  }
};
