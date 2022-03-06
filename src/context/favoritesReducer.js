const Storage = (cartItems) => {
  localStorage.setItem(
    "favorites",
    JSON.stringify(cartItems.length > 0 ? cartItems : [])
  );
};

export const FavoriteReducer = (state, action) => {
  switch (action.type) {
    case "add":
      console.log("add", action.payload);
    case "remove":
      console.log("remove", action.payload);
    default:
      return state;
  }
};
