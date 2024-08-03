"use client";
import { useEffect, useRef } from 'react';
import Image from "next/image";
import { Navigation, Pagination, Scrollbar, A11y, Controller, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import SwiperCore from 'swiper';

// Initialize Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Controller, Autoplay]);

function Header() {
    const contentSwiperRef = useRef(null);
    const mainSwiperRef = useRef(null);

    useEffect(() => {
        if (contentSwiperRef.current && mainSwiperRef.current) {
            const contentSwiper = contentSwiperRef.current.swiper;
            const mainSwiper = mainSwiperRef.current.swiper;

            if (contentSwiper && mainSwiper) {
                contentSwiper.controller.control = mainSwiper;
                mainSwiper.controller.control = contentSwiper;
            }
        }
    }, []);

    return (
        <>

            <header className="slider white-space-bottom">
                <div className="container">
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y, Controller, Autoplay]}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                        }}
                        spaceBetween={50}
                        slidesPerView={1}
                        loop={true}
                        className="swiper-container slider-content"
                        ref={contentSwiperRef}
                        navigation={{
                            nextEl: '.button-next',
                            prevEl: '.button-prev',
                        }}
                        pagination={{
                            el: '.swiper-pagination',
                            type: 'fraction',
                        }}
                    >
                        <SwiperSlide>
                            <div className="swiper-slide">
                                <div className="inner">
                                    <h2>الخرسانة الجاهزة</h2>
                                    <p>شركة دلتا ميكس هي إحدى الشركات الرائدة في إنتاج وتوريد الخرسانة الجاهزة، حيث تقدم مزيجًا عالي الجودة يُحضّر في مصانعها ثم يُنقل إلى مواقع البناء لضمان تنفيذ المشاريع بكفاءة وسرعة.</p>
                                    <a href="#">إستكشف المزيد<i className="lni lni-arrow-left"></i></a>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="swiper-slide">
                                <div className="inner">
                                    <h2>الخرسانة الجاهزة</h2>
                                    <p>شركة دلتا ميكس هي إحدى الشركات الرائدة في إنتاج وتوريد الخرسانة الجاهزة، حيث تقدم مزيجًا عالي الجودة يُحضّر في مصانعها ثم يُنقل إلى مواقع البناء لضمان تنفيذ المشاريع بكفاءة وسرعة.</p>
                                    <a href="#">إستكشف المزيد<i className="lni lni-arrow-left"></i></a>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="swiper-slide">
                                <div className="inner">
                                    <h2>الخرسانة الجاهزة</h2>
                                    <p>شركة دلتا ميكس هي إحدى الشركات الرائدة في إنتاج وتوريد الخرسانة الجاهزة، حيث تقدم مزيجًا عالي الجودة يُحضّر في مصانعها ثم يُنقل إلى مواقع البناء لضمان تنفيذ المشاريع بكفاءة وسرعة.</p>
                                    <a href="#">إستكشف المزيد<i className="lni lni-arrow-left"></i></a>
                                </div>
                            </div>
                        </SwiperSlide>
                        <div className="controls">
                            <div className="swiper-pagination"></div>
                            {/* <!-- end swiper-pagination --> */}
                            <div className="button-prev"><i className="lni lni-arrow-right"></i></div>
                            {/* <!-- end button-prev --> */}
                            <div className="button-next"><i className="lni lni-arrow-left"></i></div>
                            {/* <!-- end button-next --> */}
                        </div>
                    </Swiper>
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y, Controller]}
                        spaceBetween={0}
                        slidesPerView={1}
                        direction="vertical"
                        loop={true}
                        className="swiper-container slider-main"
                        ref={mainSwiperRef}
                    >
                        <SwiperSlide>
                            <div className="swiper-slide">
                                <div className="slide-image" style={{ backgroundImage: 'url(images/slide01.jpg)' }}></div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="swiper-slide">
                                <div className="slide-image" style={{ backgroundImage: 'url(images/slide02.jpg)' }}></div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="swiper-slide">
                                <div className="slide-image" style={{ backgroundImage: 'url(images/slide03.jpg)' }}></div>
                            </div>
                        </SwiperSlide>
                        <div className="header-box"> <b>17</b> <small>YEARS OF EXPERIENCE</small> </div>
                    </Swiper>
                </div>
            </header>
        </>
    );
}

export default Header;
