const Storage = (favItems) => {
  localStorage.setItem(
    "favorite",
    JSON.stringify(favItems.length > 0 ? favItems : [])
  );
};

export const FavoriteReducer = (state, action) => {
  switch (action.type) {
    case "favorite":
      // İf it is not favorited
      if (
        !state.favItems.find(
          (item) => item.product_id === action.payload.product_id
        )
      ) {
        state.favItems.push({
          ...action.payload,
        });
        console.log("beğendi");
        Storage(state.favItems);
        // if it is favorited
      } else {
        Storage(
          state.favItems.filter(
            (item) => item.product_id !== action.payload.product_id
          )
        );
      }

    default:
      return state;
  }
};
