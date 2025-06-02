import { cart, category, product } from "./objInterfaces";

export interface authContext {
    token: string;
    setToken: Function
}

export interface productContext {
    products: product[];
    setProducts: Function
    cart: cart[],
    categories: category[];
    addToCart: Function;
    deleteFromCart: Function;
}