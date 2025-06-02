import { createContext, FC, PropsWithChildren, useContext, useEffect, useState } from "react";
import { productContext } from "../interface/contextInterface";
import axios from "axios";
import { BASE_API_URL } from "../config";
import { AuthContext } from "./AuthContext";
import { getUserCart } from "../variables/functions/productsFunctions";

export const ProductContext = createContext<productContext>({
    products: [],
    setProducts: () => {},
    cart: [],
    categories: [],
    addToCart: () => {},
    deleteFromCart: () => {}
})

const ProductContextProvider:  FC<PropsWithChildren> = ({children}) => {
    const {token} = useContext(AuthContext)
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    const [categories, setCategories] = useState([])

    useEffect(() => {
        const unsub = async () => {
            try {
                const data = await axios.get(`${BASE_API_URL}/products`)
                setProducts(data.data)
                const categoryRes = await axios.get(`${BASE_API_URL}/products/category`)
                setCategories(categoryRes.data)
            }
            catch (err) {
                console.log(err)
            }
        }

        unsub()
    }, [])

    useEffect(() => {
        const unsub = async () => {
            await getUserCart(token, setCart)
        }

        unsub()
    }, [token])

    const addToCart = async (product: number, stock: number, color: string, setMessage: Function) => {
        try {
            if (!token) {
                setMessage("You must be logged in to continue shopping")
                return;
            }
            if (stock < 1) {
                setMessage("Invalid stock number")
                return;
            }
            await axios.post(`${BASE_API_URL}/products/cart`, {
                token, product, stock, color
            })
            await getUserCart(token, setCart)
            setMessage("Item added to cart")
        } catch (err: any) {
            setMessage(err.response.data.message)
        }
    }

    const deleteFromCart = async (id: number) => {
        try {
            if (!id) return;
            await axios.delete(`${BASE_API_URL}/products/cart/${id}`)
            await getUserCart(token, setCart)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <ProductContext.Provider value={{products, setProducts, cart, categories, addToCart, deleteFromCart}}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductContextProvider