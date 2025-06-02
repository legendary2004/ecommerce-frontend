import { Swiper, SwiperSlide } from "swiper/react"
import { maxScreenXl } from "../../../variables/styles/size"
import { sectionHeader } from "../../../variables/styles/text"
import ProductItem from "../../items/ProductItem"
import { Pagination } from "swiper/modules"
import { useContext, useState } from "react"
import { ProductContext } from "../../../context/ProductContext"
import ToastMessage from "../../toast/Message"

const NewArrivals = () => {
    const [message, setMessage] = useState("")
    const {products, addToCart} = useContext(ProductContext)
    return (
        <div className={maxScreenXl}>
            <h1 className={sectionHeader}>New arrivals</h1>
            <Swiper 
                pagination={{
                    dynamicBullets: true,
                }}
                modules={[Pagination]}
                loop
                className="mySwiper"
                breakpoints={{
                    1: { 
                        slidesPerView: 1,
                        spaceBetween: 10
                    },
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                }}
            >
                {products.length > 0 && products.reverse().map(item => (
                    <SwiperSlide>
                        <ProductItem 
                            id={item.id}
                            name={item.name}
                            price={item.price}
                            coverImage={item.pictures[0].src}
                            addToCart={() => addToCart(item.id, 1, "", setMessage)}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
            {message && <ToastMessage message={message} closeMessage={() => setMessage("")} />}
        </div>
    )
}

export default NewArrivals