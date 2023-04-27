import { Product, ProductData, ReturnType } from "../data"

export const getProductById = (id?: string): ReturnType<Product> => {
    const product = ProductData.find(product => product.id === id)
    if (!product) { 
        return {
            code: 401,
            message: "Product not found",
        }
    }
    else return {
        code: 200,
        data: product
    }

}