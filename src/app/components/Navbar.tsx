"use client";
import { useEffect } from 'react';
import Image from 'next/image';
import $ from 'jquery';

function NavBar() {
    useEffect(() => {
        const handleSearchClick = (e: JQuery.ClickEvent) => {
            $('.navbar .search').toggleClass('open');
            $(".search-box").toggleClass('active');
            $("body").toggleClass("overflow");
        };

        const handleScroll = () => {
            if (typeof document !== 'undefined') {
                $('.navbar').toggleClass('sticky', document.documentElement.scrollTop > 0);
            }
        };

        const handleWindowScroll = () => {
            didScroll = true;
        };

        const handleInterval = () => {
            if (didScroll) {
                hasScrolled();
                didScroll = false;
            }
        };

        const hasScrolled = () => {
            if (typeof window !== 'undefined' && typeof document !== 'undefined') {
                const st = $(window).scrollTop() ?? 0;

                if (Math.abs(lastScrollTop - st) <= delta) return;

                if (st > lastScrollTop && st > navbarHeight) {
                    $('.navbar').removeClass('nav-down').addClass('nav-up');
                } else {
                    if (st + ($(window).height() ?? 0) < ($(document).height() ?? 0)) {
                        $('.navbar').removeClass('nav-up').addClass('nav-down');
                    }
                }

                lastScrollTop = st;
            }
        };

        $('.navbar .search').on('click', handleSearchClick);
        $(window).on("scroll touchmove", handleScroll);
        $(window).scroll(handleWindowScroll);

        let didScroll = false;
        let lastScrollTop = 0;
        const delta = 5;
        const navbarHeight = typeof document !== 'undefined' ? $('.navbar').outerHeight() ?? 0 : 0;

        const intervalId = setInterval(handleInterval, 250);

        return () => {
            $('.navbar .search').off('click', handleSearchClick);
            $(window).off("scroll touchmove", handleScroll);
            $(window).off('scroll', handleWindowScroll);
            clearInterval(intervalId);
        };
    }, []);

    return (
        <nav className="navbar">
            <div className="container">
                <div className="logo">
                    <Image width={300} height={92} src="/images/SiteLogo/site-logo.png" alt="Image" />
                </div>
                <div className="site-menu">
                    <ul>
                        <li><a href="#">عن الشركة</a>
                            <ul>
                                <li><a href="about-company.html">عن الشركة</a></li>
                                <li><a href="core-values.html">إمكانيات الشركة</a></li>
                                <li><a href="leadership.html">الطوب الأسمنتى الخفيف</a></li>
                                <li><a href="our-history.html">الإشراف والإنتاج</a></li>
                                <li><a href="offices.html">إدارة الجودة</a></li>
                                <li><a href="certificates.html">الوظائف</a></li>
                            </ul>
                        </li>
                        <li><a href="services.html">المحطات</a></li>
                        <li><a href="projects.html">المشروعات</a></li>
                        <li><a href="news.html">الأخبار</a></li>
                        <li><a href="contact.html">إتصل بنا</a></li>
                    </ul>
                </div>
                <div className="search">
                    <i className="lni lni-search-alt"></i>
                </div>
                <div className="hamburger">
                    <div id="hamburger">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div id="cross">
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <a href="/" className="navbar-button" data-fancybox>
                    <i className="lni lni-user"></i>
                    <span>تسجيل الدخول</span>
                </a>
            </div>
        </nav>
    );
}

export default NavBar;
