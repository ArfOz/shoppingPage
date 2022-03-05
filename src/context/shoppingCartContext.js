import {createContext,useReducer} from "react";
import {ShoppingCartReducer, totalAmount} from "./shoppingCartReducer";

export const ShoppingCartContext = createContext()

const storage = localStorage.getItem('shoppingCart') ? JSON.parse(localStorage.getItem('shoppingCart')) : [];
console.log("storage", storage)
const initialState = { cartItems: storage, ...totalAmount(storage)};

const ShoppingCartContextProvider = ({children}) =>{
    const [state, dispatch] = useReducer(ShoppingCartReducer, initialState)
    
    const addCart = payload => {
        console.log("addcart içi", payload)
        dispatch({type: "addCart", payload})
    }

    const remove = payload =>{
        dispatch({type:"remove", payload})
    }
    const quantity = (payload, quantity) =>{
        dispatch({type:"quantity", payload, quantity})
    }
    const buy = payload =>{
        dispatch({type:"buy", payload})
    }

    const contextValues = {
        addCart, remove, quantity,buy, ...state
    }

    return (
        <ShoppingCartContext.Provider value={contextValues}>
            { children }
        </ShoppingCartContext.Provider>
    )
}

export default ShoppingCartContextProvider