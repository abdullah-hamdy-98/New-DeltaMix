import Image from 'next/image';
import React from 'react';
import Loader from '../components/Loader';
import Mobile from '../components/MobileVersion'
import Navbar from '../components/Navbar';
import Search from '../components/SearchBox'
import Footer from '../components/Footer'


function contactUs() {
    return (
        <>
            <Loader />
            <Navbar />
            <Search />
            <Mobile />

            <header className="page-header" >
                <div className="container">
                    <h1>تواصل معنا</h1>
                    <h6> نظرا الى سرعة نمو المحطات و إثبات الكفاءة أمام جميع المنافسين فى ميدان العمل . فتم التطلع لفتح اسواق جديدة لتوسعة النطاق الجغرافي . </h6>
                    <ul>
                        <li><a href="#">الرئيسية</a></li>
                        <li>تواصل معنا</li>
                    </ul>
                </div>
                {/*<!-- end container -->*/}
            </header>

            <>
                <section className="content-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <div className="contact-box">
                                    <figure>
                                        <Image src="/images/icon-global.png" alt="Head Office Icon" width={80} height={1000} />
                                    </figure>
                                    <h6>المقر الإدارى</h6>
                                    <p>طنطا - محافظة الغربيه<br />
                                        طريق القاهره الاسكندريه الزراعي بجوار توكيل هيونداي
                                    </p>
                                </div>
                                {/* end contact-box */}
                            </div>
                            {/* end col-4 */}
                            <div className="col-lg-4 col-md-6">
                                <div className="contact-box">
                                    <figure>
                                        <Image src="/images/icon-phone.png" alt="Phone Icon" width={80} height={1000} />
                                    </figure>
                                    <h6>أرقام التواصل</h6>
                                    <p>040-3333-333</p>
                                    <p>012-2668-0886 (20+) </p>
                                </div>
                                {/* end contact-box */}
                            </div>
                            {/* end col-4 */}
                            <div className="col-lg-4 col-md-6">
                                <div className="contact-box">
                                    <figure>
                                        <Image src="/images/icon-email.png" alt="Email Icon" width={80} height={1000} />
                                    </figure>
                                    <h6>راسلنا</h6>
                                    <p><a href="mailto:Deltamix@eamaraldelta.com">Deltamix@eamaraldelta.com</a>
                                    
                                    </p>
                                </div>
                                {/* end contact-box */}
                            </div>
                            {/* end col-4 */}
                        </div>
                        {/* end row */}
                    </div>
                    {/* end container */}
                </section>
                {/* end content-section */}
                <section className="content-section no-spacing">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="section-title text-left">
                                    <h6>تاريخنا العريق والفريد
                                    </h6>
                                    <h2>بجودة لا مثيل لها وشغف متواصل في تقديم<br />أفضل وأرقى الخدمات</h2>
                                </div>
                                {/* end section-title */}
                            </div>
                            {/* end col-6 */}
                            <div className="col-lg-6">
                                <form className="contact-form">
                                    <div className="form-group">
                                        <span>الإسم بالكامل</span>
                                        <input type="text" />
                                    </div>
                                    {/* end form-group */}
                                    <div className="form-group">
                                        <span>البريد الإلكترونى</span>
                                        <input type="text" />
                                    </div>
                                    {/* end form-group */}
                                    <div className="form-group">
                                        <span>الموضوع</span>
                                        <input type="text" />
                                    </div>
                                    {/* end form-group */}
                                    <div className="form-group">
                                        <span>رسالتك</span>
                                        <textarea />
                                    </div>
                                    {/* end form-group */}
                                    <div className="form-group">
                                        <input type="submit" value="أرسل الأن" />
                                    </div>
                                    {/* end form-group */}
                                </form>
                                {/* end contact-form */}
                            </div>
                            {/* end col-6 */}
                        </div>
                        {/* end row */}
                    </div>
                    {/* end container */}
                </section>
                {/* end content-section */}
                <section className="content-section no-spacing">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3429.66786251049!2d31.0245449!3d30.7277364!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f7cfb37dc22dfd%3A0xf6d479723a9e5c5d!2z2K_ZhNiq2Kcg2YXZitmD2LMg2YTZhNmF2YbYqtis2KfYqiDYp9mE2KfYs9mF2YbYqtmK2Kk!5e0!3m2!1sar!2seg!4v1723815378010!5m2!1sar!2seg"
                        frameBorder="0"
                        className="google-maps"
                        allowFullScreen
                        aria-hidden="false"
                        tabIndex={0}
                    />

                </section>

            </>

            <Footer />
        </>
    )
}

export default contactUs;