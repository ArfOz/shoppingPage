const Storage = (cartItems) =>{
    localStorage.setItem('shoppingCart', JSON.stringify(cartItems.length > 0 ? cartItems : []));
}

export const totalAmount = (cartItems) =>{
    Storage(cartItems);
    let itemsCount = cartItems.reduce((total, product) => total + product.quantity, 0);
    // let total = cartItems.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2);
    return { itemsCount}
}

export const ShoppingCartReducer = (state, action) => {
    switch(action.type){
        case "addCart":
            if(!state.cartItems.find(item =>item.product_id === action.payload.product_id)){
                state.cartItems.push({
                    ...action.payload,
                    quantity:1
                })
            }
            console.log("addcart", action.payload)
            return{
                ...state,
                ...totalAmount(state.cartItems),
                cartItems: [...state.cartItems]
            }
        case "remove":
            
            return{
                ...state,
                ...totalAmount(state.cartItems.filter(item => item.product_id !== action.payload.product_id)),
                cartItems:[...state.cartItems.filter(item=> item.product_id !== action.payload.product_id)]
            }
        case "quantity":
           console.log("arif", action.quantity)
           const ozkan = state.cartItems.find(item =>item.product_id === action.payload.product_id)
            ozkan.quantity = action.quantity.quant + ozkan.quantity
            return{
                ...state,
                ...totalAmount(state.cartItems),
                cartItems:[...state.cartItems]
            }

        case "buy":
            return{
                ...state
            }
        default:
                return state
    }
}
