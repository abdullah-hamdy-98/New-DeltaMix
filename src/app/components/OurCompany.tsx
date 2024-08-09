"use client"
import { useEffect } from 'react';
import Image from 'next/image';
import $ from 'jquery'; 

function OurCompany() {
    useEffect(() => {
        // LOGO HOVER
        $(".logo-item").hover(function () {
            $('.logo-item').not(this).css({
                "opacity": "0.3"
            });
        },
            function () {
                $('.logo-item').not(this).css({
                    "opacity": "1"
                });
            });
    }, []); 

    return (
        <>
            <div className="content-section-logos" style={{ backgroundColor: '#f7f6f1' }}>
                <div className="container">
                   
                    <div className="row no-gutters">
                        <div className="col-lg-2 col-md-4 col-6">
                            <figure className="logo-item" style={{ cursor: 'Pointer' }}>
                                <Image src="/images/Logos/1.png" alt="Logo 1" width={1000} height={35} />
                            </figure>
                        </div>

                        <div className="col-lg-2 col-md-4 col-6">
                            <figure className="logo-item" style={{ cursor: 'Pointer' }}>
                                <Image src="/images/Logos/2.png" alt="Logo 2" width={1000} height={35} />
                            </figure>
                        </div>

                        <div className="col-lg-2 col-md-4 col-6">
                            <figure className="logo-item" style={{ cursor: 'Pointer' }}>
                                <Image src="/images/Logos/3.png" alt="Logo 3" width={1000} height={35} />
                            </figure>
                        </div>

                        <div className="col-lg-2 col-md-4 col-6">
                            <figure className="logo-item" style={{ cursor: 'Pointer' }}>
                                <Image src="/images/Logos/4.png" alt="Logo 4" width={1000} height={35} />
                            </figure>
                        </div>

                        <div className="col-lg-2 col-md-4 col-6">
                            <figure className="logo-item" style={{ cursor: 'Pointer' }}>
                                <Image src="/images/Logos/5.png" alt="Logo 5" width={1000} height={35} />
                            </figure>
                        </div>

                        <div className="col-lg-2 col-md-4 col-6">
                            <figure className="logo-item" style={{ cursor: 'Pointer' }}>
                                <Image src="/images/Logos/6.png" alt="Logo 6" width={1000} height={35} />
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OurCompany;
