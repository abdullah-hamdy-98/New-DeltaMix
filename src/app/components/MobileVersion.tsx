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
                                            <li ><Link href="/about-us" style={{ fontSize: '12px' }}>عن الشركة</Link></li>
                                            <li><Link href="/company-cap" style={{ fontSize: '12px' }}>إمكانيات الشركة</Link></li>
                                            <li><Link href="/light-bricks" style={{ fontSize: '12px' }}>الطوب الأسمنتى الخفيف</Link></li>
                                            <li><Link href="/production" style={{ fontSize: '12px' }}>الإشراف والإنتاج</Link></li>
                                            <li><Link href="/q-management" style={{ fontSize: '12px' }}>إدارة الجودة</Link></li>
                                            <li><Link href="/careers" style={{ fontSize: '12px' }}>الوظائف</Link></li>
                                        </ul>
                                    )}
                                </li>
                                <li><Link href="/stations">المحطات</Link></li>
                                <li><Link href="/projects">المشروعات</Link></li>
                                <li><Link href="/news?pageNumber=1">الأخبار</Link></li>
                                <li><Link href="/contact">إتصل بنا</Link></li>
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
