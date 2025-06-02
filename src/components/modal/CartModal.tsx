import { FC, FormEvent, useContext, useEffect, useState } from "react"
import { bluebgColor, itemsBgColrs, primaryTextColors, secondaryTextColor } from "../../variables/styles/colors"
import { flex_center } from "../../variables/styles/display/flex"
import { ProductContext } from "../../context/ProductContext"
import { singleProp } from "../../interface/componentsInt"
import { BASE_API_URL } from "../../config"
import { useNavigate } from "react-router-dom"
import { calculateTotalShopPrice } from "../../variables/functions/formChange"

const CartModal: FC<singleProp> = ({prop}) => {
    const navigate = useNavigate()
    const {cart, deleteFromCart} = useContext(ProductContext)
    const [total, setTotal] = useState(0)
    const [newStock, setStock] = useState(0)

    useEffect(() =>  {
        setTotal(calculateTotalShopPrice(cart))
    }, [cart])

    const proceedToCheckout = () => {
        prop()
        if (cart.length == 0) return;
        navigate("/checkout")
    }

    return (
        <div className={`fixed inset-0 z-50 bg-white/25 dark:bg-neutral-800/50 ${flex_center}`}>
            <div className={`${itemsBgColrs} animate-in zoom-in duration-500 w-full max-w-lg rounded-lg shadow-lg p-6`}>
                <div className="flex justify-between items-center mb-4">
                    <h2 className={`${primaryTextColors} text-xl font-semibold`}>Shopping Cart</h2>
                    <button onClick={() => prop()} className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>

                <div className="space-y-4">
                    {cart.length > 0 && cart.map(item => (
                        <div className="flex items-center bg-neutral-100 dark:bg-neutral-700 p-4 rounded-lg">
                            <div className="w-16 h-16 rounded mr-4 bg-neutral-200 dark:bg-neutral-600 mix-blend-multiply">
                                <img className="w-full h-full object-center object-fill" 
                                src={`${BASE_API_URL}/uploads/products/${item.productRef.pictures[0].src}`}
                                alt={item.productRef.pictures[0].src} />
                            </div>
                            <div className="flex-1">
                                <h3 className={`font-medium ${primaryTextColors}`}>{item.productRef.name}</h3>
                                <p className={secondaryTextColor}>{item.color}</p>
                                <p className={primaryTextColors}>${item.productRef.price}</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <input type="number" onChange={(e: FormEvent<HTMLInputElement>) => setStock(+e.currentTarget.value)} 
                                value={item.stock || newStock} 
                                className={`w-16 p-1 border border-gray-300 dark:border-gray-600 rounded ${primaryTextColors} ${itemsBgColrs}`} />
                                <button onClick={() => deleteFromCart(item.id)} className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5-4h4"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    ))}
{/* 
                    <div className="flex items-center bg-neutral-100 dark:bg-neutral-700 p-4 rounded-lg">
                        <div className="w-16 h-16 bg-gray-200 dark:bg-neutral-600 rounded mr-4"></div>
                        <div className="flex-1">
                            <h3 className="text-gray-900 dark:text-white font-medium">Phone Case</h3>
                            <p className="text-gray-500 dark:text-gray-400">Blue</p>
                            <p className="text-gray-900 dark:text-white">$19.99</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <input type="number" value="2" className="w-16 p-1 border border-gray-300 dark:border-gray-600 rounded bg-neutral-100 dark:bg-neutral-700 text-gray-900 dark:text-white" />
                            <button className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5-4h4"></path>
                                </svg>
                            </button>
                        </div>
                    </div> */}
                </div>

                <div className="mt-6 border-t border-gray-300 dark:border-gray-600 pt-4">
                    {/* <div className="flex justify-between mb-2">
                        <span className="text-gray-500 dark:text-gray-400">Subtotal</span>
                        <span className="text-gray-900 dark:text-white">$139.97</span>
                    </div>
                    <div className="flex justify-between mb-2">
                        <span className="text-gray-500 dark:text-gray-400">Shipping</span>
                        <span className="text-gray-900 dark:text-white">$5.00</span>
                    </div> */}
                    <div className="flex justify-between font-semibold">
                        <span className="text-gray-900 dark:text-white">Total</span>
                        <span className="text-gray-900 dark:text-white">${total}</span>
                    </div>
                </div>

                <div className="mt-6 flex flex-col gap-4">
                    <button onClick={() => proceedToCheckout()} className={`w-full py-2 rounded ${bluebgColor}`}>Proceed to Checkout</button>
                    <button onClick={() => prop()} className="w-full text-blue-600 hover:text-gray-900 dark:hover:text-white py-2 rounded">Continue Shopping</button>
                </div>
            </div>
        </div>
    )
}

export default CartModal