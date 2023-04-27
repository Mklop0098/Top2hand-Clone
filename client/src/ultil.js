import { useCartContext } from "./Context/Cart/cart.context";
import { Products } from "./data";

export const formatCurrency = (currency = 0, formatter = "vi-VN") => {
    if (typeof currency === 'string') currency = parseInt(currency);
  
    const format = ["vi-VN", "VND"]
    return currency.toLocaleString(format[0], {
      style: "currency",
      currency: format[1],
    })
}

export function createUniqueId () {
    return Math.random().toString(16).slice(2)
}



export const totalPrice = (cartState) => {
  var s = 0
  cartState.products.forEach(i => {
      if(i.quantity) s += i.price * i.quantity
  });
  return s
}