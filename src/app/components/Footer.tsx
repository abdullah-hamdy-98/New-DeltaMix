import Link from 'next/link';
import Image from 'next/image';

function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-md-6">
                            <h6 className="widget-title">المقر الإدارى</h6>
                            <address>
                                <p>
                                    طريق القاهره الاسكندريه الزراعي بجوار توكيل هيونداي - طنطا - محافظة الغربيه
                                </p>
                                <p>040-3333-333</p>
                                <p>012-2668-0886 (20+) </p>
                                <p>Deltamix@eamaraldelta.com</p>

                                <a
                                    href="https://www.google.com/maps/place/%D8%AF%D9%84%D8%AA%D8%A7+%D9%85%D9%8A%D9%83%D8%B3+%D9%84%D9%84%D9%85%D9%86%D8%AA%D8%AC%D8%A7%D8%AA+%D8%A7%D9%84%D8%A7%D8%B3%D9%85%D9%86%D8%AA%D9%8A%D8%A9%E2%80%AD/@30.7277364,31.0245449,17z/data=!4m14!1m7!3m6!1s0x14f7cfb37dc22dfd:0xf6d479723a9e5c5d!2z2K_ZhNiq2Kcg2YXZitmD2LMg2YTZhNmF2YbYqtis2KfYqiDYp9mE2KfYs9mF2YbYqtmK2Kk!8m2!3d30.7277365!4d31.0294158!16s%2Fg%2F11qm63mj8m!3m5!1s0x14f7cfb37dc22dfd:0xf6d479723a9e5c5d!8m2!3d30.7277365!4d31.0294158!16s%2Fg%2F11qm63mj8m?entry=ttu"
                                    data-fancybox
                                    data-width="640"
                                    data-height="360"
                                    target="_blank"
                                >
                                    الذهاب إلى الخريطة
                                </a>
                            </address>
                        </div>
                        {/* end col-4 */}
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-container">
                                <h6 className="widget-title">شركات المجموعة</h6>
                                <div className="footer-pic">
                                    <figure className="footer-logos" style={{ cursor: 'Pointer' }}>
                                        <Image src="/images/Logo-white/1.png" alt="Logo 1" width={100} height={35} />
                                    </figure>
                                    <figure className="footer-logos" style={{ cursor: 'Pointer' }}>
                                        <Image src="/images/Logo-white/3.png" alt="Logo 3" width={100} height={35} />
                                    </figure>
                                    <figure className="footer-logos" style={{ cursor: 'Pointer' }}>
                                        <Image src="/images/Logo-white/4.png" alt="Logo 4" width={100} height={35} />
                                    </figure>

                                    <figure className="footer-logos" style={{ cursor: 'Pointer' }}>
                                        <Image src="/images/Logo-white/5.png" alt="Logo 5" width={100} height={35} />
                                    </figure>

                                    <figure className="footer-logos" style={{ cursor: 'Pointer' }}>
                                        <Image src="/images/Logo-white/2.png" alt="Logo 2" width={100} height={35} />
                                    </figure>
                                    <figure className="footer-logos" style={{ cursor: 'Pointer' }}>
                                        <Image src="/images/Logo-white/6.png" alt="Logo 6" width={100} height={35} />
                                    </figure>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <h6 className="widget-title">إتصل بنا</h6>
                            <p>للحصول على المزيد من المعلومات، يُرجى الإشتراك الأن.</p>
                            <form>
                                <input type="email" placeholder="البريد الإلكترونى" />
                                <input type="phone" placeholder="رقم الهاتف" />
                                <input type="submit" value="إشترك" />
                            </form>
                        </div>
                        {/* end col-4 */}
                        <div className="col-12">
                            <div className="footer-bottom">
                                <span dir='ltr'>© AbdullahDev. | Delta Mix Company</span>
                                <ul>
                                    <li>
                                        <Link href="#">Facebook</Link>
                                    </li>
                                    <li>
                                        <Link href="#">LinkedIn</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Twitter</Link>
                                    </li>
                                </ul>
                            </div>
                            {/* end footer-bottom */}
                        </div>
                        {/* end col-12 */}
                    </div>
                    {/* end row */}
                </div>
                {/* end container */}
                <a href="#" className="scroll-top">
                    <i className="lni lni-arrow-up"></i> <small>الرجوع للأعلى</small>
                </a>
                {/* end scroll-top */}
            </footer>
        </>
    )
}

export default Footer;