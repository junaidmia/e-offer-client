import React from 'react';
import './Header.css'
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"
// import Swiper core and required modules
import SwiperCore, {
    Pagination, Navigation
} from 'swiper/core';
// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

const Header = () => {

    const sliderData = [
        {
            id: '1',
            img: 'https://df17fp68uwcso.cloudfront.net/eyJidWNrZXQiOiJtZWRpYS5ldmFseS5jb20uYmQiLCJrZXkiOiJtZWRpYS9pbWFnZXMvODI1MjMzOWE3Njc4LXJlY2VpdmVkXzgxMzAxNTc1OTY0OTk5My5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoxMzUwLCJoZWlnaHQiOiJhdXRvIiwiZml0IjoiY29udGFpbiJ9LCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfSwiZmxhdHRlbiI6dHJ1ZSwianBlZyI6eyJxdWFsaXR5Ijo5MH19fQ=='
        },
        {
            id: '1',
            img: 'https://df17fp68uwcso.cloudfront.net/eyJidWNrZXQiOiJtZWRpYS5ldmFseS5jb20uYmQiLCJrZXkiOiJtZWRpYS9pbWFnZXMvNWUyZWVjZjU1YTcwLTFmOTNmZDNiLTgzYjgtNDBmNi1hZDEyLTc3MGViOTlmMTY3ZS5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoxMzUwLCJoZWlnaHQiOiJhdXRvIiwiZml0IjoiY29udGFpbiJ9LCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfSwiZmxhdHRlbiI6dHJ1ZSwianBlZyI6eyJxdWFsaXR5Ijo5MH19fQ=='
        },
        // {
        //     id: '1',
        //     img: ''
        // },
    ]

    return (
        <section className="pt-3 container">
            <div className="row">
                <div className="col-md-12">
                    <Swiper slidesPerView={1} spaceBetween={30} loop={true} pagination={{
                        "clickable": true
                    }} navigation={true} navigationSize={10} className="mySwiper">
                        {
                            sliderData.map(sliders => <SwiperSlide><img style={{ width: '100%' }} src={sliders.img} alt="" /></SwiperSlide>)
                        }
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default Header;