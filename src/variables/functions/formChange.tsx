import { FormEvent } from "react";
import { cart } from "../../interface/objInterfaces";

export const handleInputChange = (e: FormEvent<any>, updateChange: Function) => {
    const {id, value, type} = e.currentTarget
    updateChange((prev: any) => {
        return {
            ...prev,
            [id]: type == 'number' ? +value : value
        }
    })
}

// 

export const calculateTotalShopPrice = (cart: cart[]) => {
    let total = 0;
    cart.length > 0 && cart.map(item => {
        const price = item.stock * item.productRef.price
        total += price
    })
    return total
}