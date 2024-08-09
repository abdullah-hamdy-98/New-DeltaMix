"use client";
import React, { useRef, useState, useEffect } from 'react';
import CountUp from 'react-countup';
import 'intersection-observer'; // Polyfill for older browsers

function VisCard() {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return (
        <section className="content-section" style={{ direction: 'ltr' }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <div className="counter-box" style={{ fontSize: '28px' , textAlign:'center'}} ref={ref}>
                            {isVisible && (
                                <div style={{ fontSize: '28px' , textAlign:'center' }}>
                                    <CountUp end={20} duration={4} />
                                </div>
                            )}
                            
                            <h6 >سيارة نقل خلاطات</h6>
                            <p>ذللك يضمن للعميل سرعة نقل الخرسانه لعمل الصبات في اقل وقت ممكن</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="counter-box" style={{ fontSize: '28px' , textAlign:'center'}}>
                            {isVisible && (
                                <div style={{ fontSize: '28px' , textAlign:'center'}}>
                                    <CountUp end={4} duration={4} />
                                </div>
                            )}
                            
                            <h6>مضخة</h6>
                            <p>مضخات بأطوال مختلفه تصل الي 47م وكذلك يوجد مضخات ثابته</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="counter-box" style={{ fontSize: '28px' , textAlign:'center'}}>
                            {isVisible && (
                                <div style={{ fontSize: '28px' , textAlign:'center'}}>
                                    <CountUp end={3} duration={4} />
                                </div>
                            )}
                            
                            <h6>سيارة نصف نقل</h6>
                            <p>لخدمات التنقل لاحتياجات العميل</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="counter-box" style={{ fontSize: '28px' , textAlign:'center'}}>
                            {isVisible && (
                                <div style={{ fontSize: '28px' , textAlign:'center'}}>
                                    <CountUp end={2} duration={4} />
                                </div>
                            )}
                            
                            <h6>مولد كهربائى</h6>
                            <p>ذلك للحرص علي العمل دون توقف علي مدار 24 ساعه</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default VisCard;
