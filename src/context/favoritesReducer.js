const Storage = (favItems) => {
  localStorage.setItem(
    "favorite",
    JSON.stringify(favItems.length > 0 ? favItems : [])
  );
};

export const FavoriteReducer = (state, action) => {
  switch (action.type) {
    case "addFav":
      if (
        !state.favItems.find(
          (item) => item.product_id === action.payload.product_id
        )
      ) {
        state.favItems.push({
          ...action.payload,
        });
      }
      return {
        ...state,
        ...Storage(state.favItems),
        favItems: [...state.favItems],
      };
    case "removeFav":
      return {
        ...state,
        ...Storage(
          state.favItems.filter(
            (item) => item.product_id !== action.payload.product_id
          )
        ),
        favItems: [
          ...state.favItems.filter(
            (item) => item.product_id !== action.payload.product_id
          ),
        ],
      };
    default:
      return state;
  }
};
