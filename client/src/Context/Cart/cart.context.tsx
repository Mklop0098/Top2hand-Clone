import { createContext, Dispatch, useContext, useReducer } from "react"
import { Products } from "../../data"
import { CartAction } from "./cart.action"
import { cartReducer } from "./cart.reducer"

type CartContextType = {
    cartState: Products,
    cartDispatch: Dispatch<CartAction>
}

const initialState: Products = {
    products: []
}

export const CartContext = createContext<CartContextType>({ cartState: initialState } as CartContextType);

export const useCartContext = () => {
    return useContext(CartContext)
}

export const CartProvider = (props: any) => {

    const [cartState, cartDispatch] = useReducer(cartReducer, initialState);


    return <CartContext.Provider value={{ cartState, cartDispatch }}>
        {props.children}
    </CartContext.Provider>



}