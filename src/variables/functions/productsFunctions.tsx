import axios from "axios";
import { BASE_API_URL } from "../../config";
import { useSearchParams } from "react-router-dom";

export const getUserCart = async (token: string, setCart: Function) => {
    try {
        if (!token) return;
        const data = await axios.get(`${BASE_API_URL}/products/cart/${token}`)
        setCart(data.data)
    } catch (err) {
        console.log(err)
    }
}

export const getCurrWishlist = async (token: string, id: number, setWishlist: Function) => {
    try {  
        const wishlistData = await axios.get(`${BASE_API_URL}/products/wishlist/${token}/${id}`)
        setWishlist(wishlistData.data)
    } catch (err) {
        console.log(err)
    }
}

export const productFiltering = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const filters = {
        name: searchParams.get('name') || "",
        category: searchParams.get('category')?.length as any > 0 ? searchParams.get('category') : "",
        minPrice: searchParams.get('minPrice') || 0,
        maxPrice: searchParams.get('maxPrice') || 0,
        sort: searchParams.get('sort') || "id desc"
    }

    const updateFilters = (newFilter: any) => {
        const nextParams = new URLSearchParams(searchParams)
        for (const [key, value] of Object.entries(newFilter)) {
            if (value) nextParams.set(key, value as any)
            else nextParams.delete(key)
        }

        setSearchParams(nextParams)
        return searchParams
    }

    return {filters, updateFilters}
}