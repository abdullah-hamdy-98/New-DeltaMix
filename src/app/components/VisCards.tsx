"use client";
import React, { useEffect } from 'react';
import $ from 'jquery';
import 'odometer/themes/odometer-theme-default.css';


function VisCard() {
   

    return (
        <section className="content-section" style={{ direction: 'ltr' }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <div className="counter-box">
                            <span className="odometer" data-count="20" data-status="yes">0</span>
                            <span className="value">#</span>
                            <h6>سيارة نقل خلاطات</h6>
                            <p>ذللك يضمن للعميل سرعة نقل الخرسانه لعمل الصبات في اقل وقت ممكن</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="counter-box">
                            <span className="odometer" data-count="4" data-status="yes">0</span>
                            <span className="value">#</span>
                            <h6>مضخة</h6>
                            <p>مضخات بأطوال مختلفه تصل الي 47م وكذلك يوجد مضخات ثابته</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="counter-box">
                            <span className="odometer" data-count="3" data-status="yes">0</span>
                            <span className="value">#</span>
                            <h6>سيارة نصف نقل</h6>
                            <p>لخدمات التنقل لاحتياجات العميل</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="counter-box">
                            <span className="odometer" data-count="2" data-status="yes">0</span>
                            <span className="value">#</span>
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
