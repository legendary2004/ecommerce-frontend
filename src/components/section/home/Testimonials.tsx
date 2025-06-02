import { Swiper, SwiperSlide } from "swiper/react"
import { sectionHeader } from "../../../variables/styles/text"
import { Pagination } from "swiper/modules"
import TestimonialReview, { Review } from "../../items/TestimonialReview"
import { maxScreenXl } from "../../../variables/styles/size"
import "../../../styles/imagePagination.css"
import { useEffect, useState } from "react"
import axios from "axios"
import { BASE_API_URL } from "../../../config"

const Testimonials = () => {
    const [reviews, setReviews] = useState<Review[]>([])

    useEffect(() => {
        const unsub = async () => {
            try {
                const response = await axios.get(`${BASE_API_URL}/products/reviews`)
                setReviews(response.data)
                console.log(response)
            } catch (err) {
                console.log(err)
            }
        }
        unsub()
    }, [])
    return (
        <div className={maxScreenXl}>
            <h1 className={sectionHeader}>What they say about us?</h1>
            <Swiper
                pagination={{
                    clickable: true
                }}
                modules={[Pagination]}
                className="swiper2"
            >
                {reviews.length > 0 && reviews.map((item, index) => (
                    <SwiperSlide className="flow-root">
                        <TestimonialReview key={index} name={item.name} comment={item.comment} />
                    </SwiperSlide>
                ))}
                {/* <SwiperSlide>
                    <TestimonialReview />
                </SwiperSlide>
                <SwiperSlide>
                    <TestimonialReview />
                </SwiperSlide>
                <SwiperSlide>
                    <TestimonialReview />
                </SwiperSlide> */}
            </Swiper>
        </div>
    )
}

export default Testimonials