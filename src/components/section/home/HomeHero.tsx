import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation, Pagination } from 'swiper/modules';
import { maxScreenXl } from '../../../variables/styles/size';
import SliderItem from '../../items/SliderItem';
import { useContext } from 'react';
import { ProductContext } from '../../../context/ProductContext';


const HomeHero = () => {
    const {products} = useContext(ProductContext)

    return (
        <div className={`${maxScreenXl}`}>
            <Swiper 
            pagination={true} 
            navigation={true} 
            loop modules={[Pagination, Navigation]} 
            speed={1000} 
            className={`mySwiper  rounded-xl`}>
            {products.length > 0 && products.map(item => (
                <SwiperSlide key={item.id}>
                    <SliderItem 
                        id={item.id}
                        name={item.name}
                        price={item.price}
                        coverImage={item.pictures[0].src}
                        addToCart={() => {}}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
        </div>
    )
}

export default HomeHero