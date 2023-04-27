import { Products } from "../../data";
import { CartAction } from "./cart.action";
import { CartConst } from "./cart.const";

export const cartReducer = (state: Products, action: CartAction): Products => {
    switch (action.type) {
        case CartConst.SET_PRODUCT_TO_CART: {
            const product = state.products.find(product => product.id === action.payload.product.id)
            if(product) {
                return state
            }

            else {
                const product = action.payload.product
                product.quantity = action.payload.quantity
                return {
                    ...state,
                    products: [...state.products, product]
                }
            }   
        }
        case CartConst.REMOVE_PRODUCT_FROM_CART: {
            return {
                products: state.products.filter(id => id.id != action.payload.id)
            }
        }

        case CartConst.CHANGE_PRODUCT_QUANTITY: {
            const product = state.products.find(product => product.id === action.payload.id)
            if(product) {
                product.quantity = action.payload.newquantity
            }
            return state
        }

        default: 
            return state
    }
}