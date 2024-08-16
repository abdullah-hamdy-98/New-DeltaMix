import Link from 'next/link'
function LastNews() {
    return (
        <>
            <section className="content-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-title">
                                <h6>أحدث الأخبار </h6>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="recent-news">
                                <figure>
                                    <img src="images/last-news/nadwa.jpg" alt="Image" />
                                </figure>
                                <div className="content" >
                                    <small>29 فبراير, 2020</small>
                                    <h3>
                                        <Link href="/news/news-single">
                                            إفتتاح محطة دلتا ميكس فى كفر الزيات
                                        </Link>

                                    </h3>
                                    <div className="author" >
                                        <img src="images/author01.png" alt="Image" />
                                        <span>
                                            بواسطة <b>Abdullah Hamdy</b>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="row inner">
                                <div className="col-md-6">
                                    <div className="recent-news">
                                        <figure>
                                            <img src="images/last-news/nadwa.jpg" alt="Image" />
                                        </figure>
                                        <div className="content">
                                            <small>29 فبراير, 2020</small>
                                            <h3>
                                                <Link href="/news/news-single">
                                                    إفتتاح محطة دلتا ميكس فى كفر الزيات
                                                </Link>

                                            </h3>
                                            <div className="author" >
                                                <img src="images/author01.png" alt="Image" />
                                                <span>
                                                    بواسطة <b>Abdullah Hamdy</b>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="recent-news">
                                        <figure>
                                            <img src="images/last-news/nadwa.jpg" alt="Image" />
                                        </figure>
                                        <div className="content">
                                            <small>29 فبراير, 2020</small>
                                            <h3>
                                                <Link href="/news/news-single">
                                                    إفتتاح محطة دلتا ميكس فى كفر الزيات
                                                </Link>

                                            </h3>
                                            <div className="author" >
                                                <img src="images/author01.png" alt="Image" />
                                                <span>
                                                    بواسطة <b>Abdullah Hamdy</b>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section></>
    )
}

export default LastNews; 