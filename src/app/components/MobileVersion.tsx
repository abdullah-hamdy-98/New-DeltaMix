"use client";
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

function Mobile() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        console.log('Menu toggled:', !isMenuOpen); // Debugging
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <aside className="side-widget">
                <div className="inner">
                    <div className="logo">
                        <Link href="/">
                            <Image width={200} height={52} src="/images/SiteLogo/site-logo.png" alt="Image" />
                        </Link>
                    </div>
                    {/* end logo */}
                    <div className="hide-mobile">
                        <p>
                            تتميز الخرسانة الجاهزة من دلتا ميكس بالجودة العالية و الالتزام بمحتوى الأسمنت المطلوب و دقة نتائج الاختبارات و تحقيق المواصفات المطلوبة
                        </p>
                        <figure className="gallery">
                            <Image src="/images/Projects/7.jpg" alt="Slide 02" width={200} height={100} />
                            <Image src="/images/Projects/4.jpg" alt="Slide 03" width={200} height={100} />
                        </figure>

                        <address className="address">
                            <p>
                                طريق القاهره الاسكندريه الزراعي بجوار توكيل هيونداي - طنطا - محافظة الغربيه
                            </p>
                            <p>040-3333-333</p>
                            <p>012-2668-0886 (20+) </p>
                            <p>Deltamix@eamaraldelta.com</p>
                        </address>

                        <ul className="social-media">
                            <li><Link href="#">Facebook</Link></li>
                            <li><Link href="#">Twitter</Link></li>
                            <li><Link href="#">Instagram</Link></li>
                        </ul>
                    </div>
                    {/* end hide-mobile */}
                    <div className="show-mobile">
                        {/* end languages */}
                        <div className="site-menu">
                            <ul>
                                <li>
                                    <span onClick={toggleMenu} style={{
                                        cursor: 'pointer',
                                        color: '#fff',
                                        fontSize: '18px',
                                        fontWeight: '600'
                                    }}>
                                        عن الشركة
                                        <i className={`lni lni-chevron-${isMenuOpen ? 'up' : 'down'}-circle`}></i>
                                    </span>
                                    {isMenuOpen && (
                                        <ul>
                                            <li ><a href="about-company.html" style={{ fontSize: '12px' }}>عن الشركة</a></li>
                                            <li><a href="core-values.html" style={{ fontSize: '12px' }}>إمكانيات الشركة</a></li>
                                            <li><a href="leadership.html" style={{ fontSize: '12px' }}>الطوب الأسمنتى الخفيف</a></li>
                                            <li><a href="our-history.html" style={{ fontSize: '12px' }}>الإشراف والإنتاج</a></li>
                                            <li><a href="offices.html" style={{ fontSize: '12px' }}>إدارة الجودة</a></li>
                                            <li><a href="certificates.html" style={{ fontSize: '12px' }}>الوظائف</a></li>
                                        </ul>
                                    )}
                                </li>
                                <li><a href="services.html">المحطات</a></li>
                                <li><a href="projects.html">المشروعات</a></li>
                                <li><a href="news.html">الأخبار</a></li>
                                <li><a href="contact.html">إتصل بنا</a></li>
                            </ul>
                        </div>
                        {/* end site-menu */}
                    </div>
                    {/* end show-mobile */}
                    <small dir='ltr'>© AbdullahDev. | Delta Mix Company</small>
                </div>
                {/* end inner */}
            </aside >
        </>
    );
}

export default Mobile;
