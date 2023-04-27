
import { Product } from "../../data";
import { typedAction } from "../typed";
import { CartConst } from "./cart.const";

export const setProductToCart = (newproduct: Product, quantity: number) => {
    return typedAction(CartConst.SET_PRODUCT_TO_CART, { product: newproduct, quantity })
}

export const removeProductFromCart = (id: string) => {
    return typedAction(CartConst.REMOVE_PRODUCT_FROM_CART, { id })
}

export const changeProductQuantity = (newquantity: number, id: string) => {
    return typedAction(CartConst.CHANGE_PRODUCT_QUANTITY, { newquantity, id })
}


export type CartAction = ReturnType<
    typeof setProductToCart |
    typeof removeProductFromCart |
    typeof changeProductQuantity
>