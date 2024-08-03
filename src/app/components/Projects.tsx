"use client";
import { useEffect, useRef } from 'react';
import { Navigation, Pagination, Scrollbar, A11y, Controller } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Projects() {
    return (
        <>
            <section className="content-section white-space-bottom" style={{ backgroundColor: '#f7f6f1' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="section-title text-right">
                                <h6>مشروعاتنا </h6>
                                <h2 style={{ fontWeight: 400, fontSize: '18px' }}>بعض المشروعات التى قامت الشركه بتوريد الخرسانه المطلوبه لها </h2>
                            </div>
                        </div>
                        <div className="col-lg-5" style={{ textAlign: 'right', fontSize: '14px' }}>
                            <p>تُبرز هذه النبذة بعض المشاريع التي نفذتها الشركة، حيث قامت
                                بتوريد الخرسانة المطلوبة بدقة لمجموعة متنوعة من المنشآت، بما في ذلك الأبنية السكنية والتجارية والمشروعات الكبرى.
                                تضمن الشركة توفير أعلى مستويات الجودة والكفاءة في كل مرحلة من مراحل تنفيذ المشروع،
                                مما يعكس التزامها بتلبية احتياجات العملاء والمتطلبات الفنية.</p>
                        </div>
                    </div>
                </div>

                <div className="swiper-container project-slider">
                    <Swiper
                        initialSlide={2}
                        modules={[Navigation, Pagination, Scrollbar, A11y, Controller]}
                        spaceBetween={30}
                        slidesPerView="auto"
                        className='project-slider'
                        loop={true}
                        centeredSlides={true}
                        pagination={{
                            clickable: true,
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 0,
                            },
                            768: {
                                slidesPerView: 1,
                                spaceBetween: 30,
                            },
                            1080: {
                                slidesPerView: 2,
                                spaceBetween: 30,
                            }

                        }}
                    >
                        <SwiperSlide>
                            <div className="swiper-slide">
                                <figure className="project-box">
                                    <a href="/"><img src="images/Projects/1.jpg" alt="Image" /></a>
                                    <figcaption >
                                        <h5 style={{ textAlign: 'right' }} >إعمار الأشرف</h5>
                                        <p style={{ textAlign: 'right' }}>هذا النص هو عنصر مؤقت يتم استخدامه لحين الانتهاء من وضع النص الأصلي. يُرجى استبداله بالنص النهائي عند توفره.</p>
                                    </figcaption>
                                </figure>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="swiper-slide">
                                <figure className="project-box">
                                    <a href="/"><img src="images/Projects/2.jpg" alt="Image" /></a>
                                    <figcaption>
                                        <h5 style={{ textAlign: 'right' }}>إعمار الحرية</h5>
                                        <p style={{ textAlign: 'right' }}>هذا النص هو عنصر مؤقت يتم استخدامه لحين الانتهاء من وضع النص الأصلي. يُرجى استبداله بالنص النهائي عند توفره.</p>

                                    </figcaption>
                                </figure>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="swiper-slide">
                                <figure className="project-box">
                                    <a href="/"><img src="images/Projects/3.jpg" alt="Image" /></a>
                                    <figcaption>
                                        <h5 style={{ textAlign: 'right' }}>إعمار العرب</h5>
                                        <p style={{ textAlign: 'right' }}>هذا النص هو عنصر مؤقت يتم استخدامه لحين الانتهاء من وضع النص الأصلي. يُرجى استبداله بالنص النهائي عند توفره.</p>
                                    </figcaption>
                                </figure>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="swiper-slide">
                                <figure className="project-box">
                                    <a href="/"><img src="images/Projects/4.jpg" alt="Image" /></a>
                                    <figcaption>
                                        <h5 style={{ textAlign: 'right' , fontFamily:'GESSTwo' }}>كلية التربية - جامعة طنطا</h5>
                                        <p style={{ textAlign: 'right' }}>هذا النص هو عنصر مؤقت يتم استخدامه لحين الانتهاء من وضع النص الأصلي. يُرجى استبداله بالنص النهائي عند توفره.</p>
                                    </figcaption>
                                </figure>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="swiper-slide">
                                <figure className="project-box">
                                    <a href="/"><img src="images/Projects/5.jpg" alt="Image" /></a>
                                    <figcaption>
                                        <h5 style={{ textAlign: 'right' }}>مبنى الخدمات الطلابية - جامعة طنطا</h5>
                                        <p style={{ textAlign: 'right' }}>هذا النص هو عنصر مؤقت يتم استخدامه لحين الانتهاء من وضع النص الأصلي. يُرجى استبداله بالنص النهائي عند توفره.</p>
                                    </figcaption>
                                </figure>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="swiper-slide">
                                <figure className="project-box">
                                    <a href="/"><img src="images/Projects/6.jpg" alt="Image" /></a>
                                    <figcaption>
                                        <h5 style={{ textAlign: 'right' }}>مول العاصمة</h5>
                                        <p style={{ textAlign: 'right' }}>هذا النص هو عنصر مؤقت يتم استخدامه لحين الانتهاء من وضع النص الأصلي. يُرجى استبداله بالنص النهائي عند توفره.</p>
                                    </figcaption>
                                </figure>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="swiper-slide">
                                <figure className="project-box">
                                    <a href="/"><img src="images/Projects/7.jpg" alt="Image" /></a>
                                    <figcaption>
                                        <h5 style={{ textAlign: 'right' }}>كلية الهندسة - جامعة طنطا</h5>
                                        <p style={{ textAlign: 'right' }}>هذا النص هو عنصر مؤقت يتم استخدامه لحين الانتهاء من وضع النص الأصلي. يُرجى استبداله بالنص النهائي عند توفره.</p>
                                    </figcaption>
                                </figure>
                            </div>
                        </SwiperSlide>
                        <div className="swiper-pagination"></div>
                    </Swiper>
                </div>
            </section>
        </>
    );
}

export default Projects;
