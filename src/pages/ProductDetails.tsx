import Page from "../classes/Page"
import { bluebgColor, primaryTextColors, secondaryTextColor } from "../variables/styles/colors"
import { flex_between, flex_center } from "../variables/styles/display/flex"
import { icon_8,  maxScreenXl } from "../variables/styles/size"
import { largeText, sectionHeader, smallText } from "../variables/styles/text"
import { FaHeart } from "react-icons/fa";
import { CiShoppingCart } from "react-icons/ci"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper/modules"
import "../styles/productImagePagination.css"
import { useParams } from "react-router-dom"
import { FormEvent, useContext, useEffect, useRef, useState } from "react"
import axios from "axios"
import { BASE_API_URL } from "../config"
import { product } from "../interface/objInterfaces"
import { productObj } from "../variables/objects/emptyObjects"
import { ProductContext } from "../context/ProductContext"
import ToastMessage from "../components/toast/Message"
import { AuthContext } from "../context/AuthContext"
import { getCurrWishlist } from "../variables/functions/productsFunctions"

const ProductDetails = () => {
    const id = useParams()
    const {token} = useContext(AuthContext)
    const {addToCart} = useContext(ProductContext)
    const [product, setProduct] = useState<product>(productObj)
    const swiperRef = useRef<any>(null);
    const [selectedColor, setColor] = useState("");
    const [stock, setStock] = useState(0);
    const [message, setMessage] = useState("");
    const [wishlist, setWishlist] = useState({id: 0, user: 0, product: 0})

    useEffect(() => {
        const elements = document.querySelectorAll(".swiper3 .swiper-pagination-bullet");
        elements.forEach((element: any, i) => {
            element.style.backgroundImage = `url(${BASE_API_URL}/uploads/products/${product.pictures[i]?.src})`;
            element.style.minWidth = '120px';
            element.style.height = '120px';
            element.style.backgroundSize = 'cover';
            element.style.backgroundPosition = 'center';
            element.style.mixBlendMode = 'multiply'
            element.style.borderRadius = '0px';
        })
    }, [product]);

    useEffect(() => {
        const unsub = async () => {
            try {
                if (id.id) {
                    const data = await axios.get(`${BASE_API_URL}/products?id=${+id.id}`)
                    setProduct(data.data)
                }
            } catch (err) {
                console.log(err)
            }
        }

        unsub()
    }, [id.id])

    useEffect(() => {
        const unsub = async () => {
            try {
                if (product.id && token) {
                    getCurrWishlist(token, product.id, setWishlist)
                }
            } catch (err) {
                console.log(err)
            }
        }

        unsub()
    }, [product.id, token]) 

    const handleStock = (action: string) => {
        if (action == 'increment') setStock(prev => prev + 1)
        else if (action == 'decrement') setStock(prev => prev - 1)
    }

    const handleWishlist = async () => {
        try {
            const response = await axios.post(`${BASE_API_URL}/products/wishlist`, {token, product: product.id})
            setMessage(response.data)
            getCurrWishlist(token, product.id, setWishlist)
        } catch (err: any) {
            setMessage(err.response.data.message)
        }
    }   

    return (
        <Page>
                  {/* <style>{styles}</style> */}
            <div className={maxScreenXl}>
            <div className={`${primaryTextColors} grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16`}>
                <div className="w-full flex flex-col justify-center order-last lg:order-none">
                    <div className={flex_between}>
                        <h2 className={`${sectionHeader} text-start`}>{product.name}
                        </h2>
                        <button
                            onClick={handleWishlist}
                            className={`p-4 rounded-full hover:scale-125 hover:shadow-sm duration-500`}> 
                            <FaHeart className={`${icon_8} ${wishlist.id ? "text-red-600" : ""}`} />
                        </button>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center mb-6">
                        <h6
                            className={`${primaryTextColors} font-semibold text-2xl leading-9 pr-5 mr-5`}>
                            {product.price}</h6>
                        <div className={`${flex_center} gap-2`}>
                            <div className={`${flex_center} gap-1`}>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_12029_1640)">
                                        <path
                                            d="M9.10326 2.31699C9.47008 1.57374 10.5299 1.57374 10.8967 2.31699L12.7063 5.98347C12.8519 6.27862 13.1335 6.48319 13.4592 6.53051L17.5054 7.11846C18.3256 7.23765 18.6531 8.24562 18.0596 8.82416L15.1318 11.6781C14.8961 11.9079 14.7885 12.2389 14.8442 12.5632L15.5353 16.5931C15.6754 17.41 14.818 18.033 14.0844 17.6473L10.4653 15.7446C10.174 15.5915 9.82598 15.5915 9.53466 15.7446L5.91562 17.6473C5.18199 18.033 4.32456 17.41 4.46467 16.5931L5.15585 12.5632C5.21148 12.2389 5.10393 11.9079 4.86825 11.6781L1.94038 8.82416C1.34687 8.24562 1.67438 7.23765 2.4946 7.11846L6.54081 6.53051C6.86652 6.48319 7.14808 6.27862 7.29374 5.98347L9.10326 2.31699Z"
                                            fill="#FBBF24" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_12029_1640">
                                            <rect width="20" height="20" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_12029_1640)">
                                        <path
                                            d="M9.10326 2.31699C9.47008 1.57374 10.5299 1.57374 10.8967 2.31699L12.7063 5.98347C12.8519 6.27862 13.1335 6.48319 13.4592 6.53051L17.5054 7.11846C18.3256 7.23765 18.6531 8.24562 18.0596 8.82416L15.1318 11.6781C14.8961 11.9079 14.7885 12.2389 14.8442 12.5632L15.5353 16.5931C15.6754 17.41 14.818 18.033 14.0844 17.6473L10.4653 15.7446C10.174 15.5915 9.82598 15.5915 9.53466 15.7446L5.91562 17.6473C5.18199 18.033 4.32456 17.41 4.46467 16.5931L5.15585 12.5632C5.21148 12.2389 5.10393 11.9079 4.86825 11.6781L1.94038 8.82416C1.34687 8.24562 1.67438 7.23765 2.4946 7.11846L6.54081 6.53051C6.86652 6.48319 7.14808 6.27862 7.29374 5.98347L9.10326 2.31699Z"
                                            fill="#FBBF24" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_12029_1640">
                                            <rect width="20" height="20" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_12029_1640)">
                                        <path
                                            d="M9.10326 2.31699C9.47008 1.57374 10.5299 1.57374 10.8967 2.31699L12.7063 5.98347C12.8519 6.27862 13.1335 6.48319 13.4592 6.53051L17.5054 7.11846C18.3256 7.23765 18.6531 8.24562 18.0596 8.82416L15.1318 11.6781C14.8961 11.9079 14.7885 12.2389 14.8442 12.5632L15.5353 16.5931C15.6754 17.41 14.818 18.033 14.0844 17.6473L10.4653 15.7446C10.174 15.5915 9.82598 15.5915 9.53466 15.7446L5.91562 17.6473C5.18199 18.033 4.32456 17.41 4.46467 16.5931L5.15585 12.5632C5.21148 12.2389 5.10393 11.9079 4.86825 11.6781L1.94038 8.82416C1.34687 8.24562 1.67438 7.23765 2.4946 7.11846L6.54081 6.53051C6.86652 6.48319 7.14808 6.27862 7.29374 5.98347L9.10326 2.31699Z"
                                            fill="#FBBF24" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_12029_1640">
                                            <rect width="20" height="20" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_12029_1640)">
                                        <path
                                            d="M9.10326 2.31699C9.47008 1.57374 10.5299 1.57374 10.8967 2.31699L12.7063 5.98347C12.8519 6.27862 13.1335 6.48319 13.4592 6.53051L17.5054 7.11846C18.3256 7.23765 18.6531 8.24562 18.0596 8.82416L15.1318 11.6781C14.8961 11.9079 14.7885 12.2389 14.8442 12.5632L15.5353 16.5931C15.6754 17.41 14.818 18.033 14.0844 17.6473L10.4653 15.7446C10.174 15.5915 9.82598 15.5915 9.53466 15.7446L5.91562 17.6473C5.18199 18.033 4.32456 17.41 4.46467 16.5931L5.15585 12.5632C5.21148 12.2389 5.10393 11.9079 4.86825 11.6781L1.94038 8.82416C1.34687 8.24562 1.67438 7.23765 2.4946 7.11846L6.54081 6.53051C6.86652 6.48319 7.14808 6.27862 7.29374 5.98347L9.10326 2.31699Z"
                                            fill="#FBBF24" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_12029_1640">
                                            <rect width="20" height="20" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_8480_66029)">
                                        <path
                                            d="M9.10326 2.31699C9.47008 1.57374 10.5299 1.57374 10.8967 2.31699L12.7063 5.98347C12.8519 6.27862 13.1335 6.48319 13.4592 6.53051L17.5054 7.11846C18.3256 7.23765 18.6531 8.24562 18.0596 8.82416L15.1318 11.6781C14.8961 11.9079 14.7885 12.2389 14.8442 12.5632L15.5353 16.5931C15.6754 17.41 14.818 18.033 14.0844 17.6473L10.4653 15.7446C10.174 15.5915 9.82598 15.5915 9.53466 15.7446L5.91562 17.6473C5.18199 18.033 4.32456 17.41 4.46467 16.5931L5.15585 12.5632C5.21148 12.2389 5.10393 11.9079 4.86825 11.6781L1.94038 8.82416C1.34687 8.24562 1.67438 7.23765 2.4946 7.11846L6.54081 6.53051C6.86652 6.48319 7.14808 6.27862 7.29374 5.98347L9.10326 2.31699Z"
                                            fill="#F3F4F6" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_8480_66029">
                                            <rect width="20" height="20" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>

                            </div>
                            <span className={`ps-2 ${smallText}`}>1624 review</span>
                        </div>

                    </div>
                    <p className={`${secondaryTextColor}`}>
                        {product.description}
                    </p>
                    <div className="block w-full">
                        <p className={`${largeText} my-8`}>Available Color</p>
                        <div className="text">
                            <div className="flex items-center justify-start gap-3 md:gap-6 relative mb-6 ">
                                {product.colors.length > 0 && product.colors.map(item =>{
                                    return (
                                        <button
                                            key={item.id}
                                            onClick={() => setColor(item.value)}
                                            className={`p-2.5 border rounded-full  transition-all duration-300`}
                                            style={{borderColor: item.value == selectedColor ? item.value : "gray"}}
                                            >
                                            <svg width="20" height="20" viewBox="0 0 40 40" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="20" cy="20" r="20" fill={item.value} />
                                            </svg>
                                        </button>
                                    )
                                })}
                            </div>
                            {/* <div className="block w-full mb-6">
                                <p className={`${largeText} my-8`}>Bag size</p>
                                <div className="grid grid-cols-2 min-[400px]:grid-cols-3 gap-3">
                                    <button
                                        className="border border-gray-200 text-gray-900 text-lg py-2 rounded-full px-1.5 sm:px-6 w-full font-semibold whitespace-nowrap shadow-sm shadow-transparent transition-all duration-300 hover:shadow-gray-300 hover:bg-gray-50 hover:border-gray-300">56
                                        cm (S)</button>
                                    <button
                                        className="border border-gray-200 text-gray-900 text-lg py-2 rounded-full px-1.5 sm:px-6 w-full font-semibold whitespace-nowrap shadow-sm shadow-transparent transition-all duration-300 hover:shadow-gray-300 hover:bg-gray-50 hover:border-gray-300">67
                                        cm (M)</button>
                                    <button
                                        className="border border-gray-200 text-gray-900 text-lg py-2 rounded-full px-1.5 sm:px-6 w-full font-semibold whitespace-nowrap shadow-sm shadow-transparent transition-all duration-300 hover:shadow-gray-300 hover:bg-gray-50 hover:border-gray-300">77
                                        cm (L)</button>
                                </div>
                            </div> */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                                <div className="flex items-center justify-center w-full">
                                    <button type="button"
                                        onClick={() => handleStock('decrement')}
                                        className="cursor-pointer group py-4 px-6 border border-gray-400 rounded-l-full shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-50 dark:hover:bg-neutral-600">
                                        <svg className="stroke-gray-400 transition-all duration-500"
                                            width="22" height="22" viewBox="0 0 22 22" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path d="M16.5 11H5.5" stroke="" strokeWidth="1.6"
                                                strokeLinecap="round" />
                                            <path d="M16.5 11H5.5" stroke="" stroke-opacity="0.2" strokeWidth="1.6"
                                                strokeLinecap="round" />
                                            <path d="M16.5 11H5.5" stroke="" stroke-opacity="0.2" strokeWidth="1.6"
                                                strokeLinecap="round" />
                                        </svg>
                                    </button>
                                    <input type="number"
                                        onChange={(e: FormEvent<HTMLInputElement>) => setStock(+e.currentTarget.value)}
                                        value={stock}
                                        className={`${primaryTextColors} font-semibold text-lg py-[13px] px-6 w-full lg:max-w-[118px] border-y border-gray-400 bg-transparent text-center focus:outline-0`}
                                        placeholder="1" 
                                    />
                                    <button
                                    type="button"
                                        onClick={() => handleStock('increment')}
                                        className="cursor-pointer group py-4 px-6 border border-gray-400 rounded-r-full shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-50 dark:hover:bg-neutral-600">
                                        <svg className="stroke-gray-400 transition-all duration-500"
                                            width="22" height="22" viewBox="0 0 22 22" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11 5.5V16.5M16.5 11H5.5" stroke="" strokeWidth="1.6"
                                                strokeLinecap="round" />
                                            <path d="M11 5.5V16.5M16.5 11H5.5" stroke="" stroke-opacity="0.2"
                                                strokeWidth="1.6" strokeLinecap="round" />
                                            <path d="M11 5.5V16.5M16.5 11H5.5" stroke="" stroke-opacity="0.2"
                                                strokeWidth="1.6" strokeLinecap="round" />
                                        </svg>
                                    </button>
                                </div>
                                <button
                                    onClick={() => addToCart(product.id, stock, selectedColor, setMessage)}
                                    className={`${bluebgColor} ${flex_center} group py-4 px-5 rounded-full font-semibold text-lg w-full gap-2 shadow-sm shadow-transparent`}>
                                    <CiShoppingCart className={icon_8} />
                                    Add to cart</button>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="">
                    <Swiper modules={[Pagination]}
                        pagination={{
                            clickable: true,
                        }}
                        slidesPerView={1}
                        className="swiper3 mySwiper"
                        onSwiper={(swiper) => {
                            swiperRef.current = swiper;
                        }}
                        loop={true}
                    >
                        {product.pictures.length > 0 && product.pictures.map(item => (
                            <SwiperSlide key={item.src}>
                                <img src={`${BASE_API_URL}/uploads/products/${item.src}`}
                                    alt={item.src} className="mx-auto object-cover" />
                            </SwiperSlide>
                        ))}
                        {/* <SwiperSlide>
                            <img src="https://pagedone.io/asset/uploads/1700471851.png"
                                    alt="Yellow Travel Bag image" className="mx-auto object-cover" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://pagedone.io/asset/uploads/1700471851.png"
                                    alt="Yellow Travel Bag image" className="mx-auto object-cover" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://pagedone.io/asset/uploads/1700471851.png"
                                    alt="Yellow Travel Bag image" className="mx-auto object-cover" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://pagedone.io/asset/uploads/1700471851.png"
                                    alt="Yellow Travel Bag image" className="mx-auto object-cover" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://pagedone.io/asset/uploads/1700471851.png"
                                    alt="Yellow Travel Bag image" className="mx-auto object-cover" />
                        </SwiperSlide> */}
                    </Swiper>
                </div>
            </div>
        </div>
        {message && <ToastMessage message={message} closeMessage={() => setMessage("")}/>}
        </Page>
    )
}

export default ProductDetails