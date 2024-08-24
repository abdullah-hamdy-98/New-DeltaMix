"use client";
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import $ from 'jquery';

interface Payload {
    username?: string;

}

async function fetchAuthPayload(): Promise<Payload> {
    const response = await fetch('/api/auth');
    const data = await response.json();
    return data.payload;
}

function NavBar() {
    const [payload, setPayload] = useState<Payload | null>(null);

    useEffect(() => {
        const getPayload = async () => {
            const data = await fetchAuthPayload();
            setPayload(data);
        };

        getPayload();

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

        let didScroll = false;
        let lastScrollTop = 0;
        const delta = 5;
        const navbarHeight = typeof document !== 'undefined' ? $('.navbar').outerHeight() ?? 0 : 0;

        const handleWindowScroll = () => {
            didScroll = true;
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

        const handleInterval = () => {
            if (didScroll) {
                hasScrolled();
                didScroll = false;
            }
        };

        const handleHamburgerClick = () => {
            $('.hamburger').toggleClass('open');
            $(".side-widget").toggleClass('active');
            $("body").toggleClass("overflow");
        };

        $('.navbar .search').on('click', handleSearchClick);
        $('.hamburger').on('click', handleHamburgerClick);
        $(window).on("scroll touchmove", handleScroll);
        $(window).scroll(handleWindowScroll);

        const intervalId = setInterval(handleInterval, 250);

        return () => {
            $('.navbar .search').off('click', handleSearchClick);
            $('.hamburger').off('click', handleHamburgerClick);
            $(window).off("scroll touchmove", handleScroll);
            $(window).off('scroll', handleWindowScroll);
            clearInterval(intervalId);
        };
    }, []);

    return (
        <nav className="navbar">
            <div className="container">
                <div className="logo-main">
                    <Link href='/'>
                        <Image width={300} height={78} src="/images/SiteLogo/site-logo.png" alt="Site Logo" />
                    </Link>
                </div>
                <div className="site-menu">
                    <ul>
                        <li>
                            <Link href="#">عن الشركة</Link>
                            <ul>
                                <li><Link href="/about-us">عن الشركة</Link></li>
                                <li><Link href="/company-cap">إمكانيات الشركة</Link></li>
                                <li><Link href="/light-bricks">الطوب الأسمنتى الخفيف</Link></li>
                                <li><Link href="/production">الإشراف والإنتاج</Link></li>
                                <li><Link href="/q-management">إدارة الجودة</Link></li>
                                <li><Link href="/careers">الوظائف</Link></li>
                            </ul>
                        </li>
                        <li><Link href="/stations">المحطات</Link></li>
                        <li><Link href="/projects">المشروعات</Link></li>
                        <li><Link href="/news?pageNumber=1">الأخبار</Link></li>
                        <li><Link href="/contact">إتصل بنا</Link></li>
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
                {payload ? (
                    <>
                        <Link href="/admin" className="navbar-button-loged" data-fancybox>
                            <i className="lni lni-user"></i>
                            <span>{payload?.username}</span>
                        </Link>
                    
                        </>
                ) : (
                    <Link href="/login" className="navbar-button" data-fancybox>
                        <i className="lni lni-user"></i>
                        <span>تسجيل الدخول</span>
                    </Link>
                )}
            </div>
        </nav>
    );
}

export default NavBar;
