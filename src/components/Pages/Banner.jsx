import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Autoplay, Pagination } from 'swiper/modules';
import Slider1 from './Slider1';
import Slider2 from './Slider2';
import Slider3 from './Slider3';
import Slider4 from './Slider4';

const Banner = () => {
    return (
        <div className='w-full'>
               <Swiper modules={[Pagination, Autoplay]}
                    autoplay={true}
                    pagination={{
                        dynamicBullets: true,
                    }}
                    className="w-full h-full"
                >
                    <SwiperSlide><Slider1></Slider1></SwiperSlide>
                    <SwiperSlide><Slider2></Slider2></SwiperSlide>
                    <SwiperSlide><Slider3></Slider3></SwiperSlide>
                    <SwiperSlide><Slider4></Slider4></SwiperSlide>
                    <SwiperSlide><Slider1></Slider1></SwiperSlide>
                    <SwiperSlide><Slider3></Slider3></SwiperSlide>

                </Swiper>
            
        </div>
    );
};

export default Banner;