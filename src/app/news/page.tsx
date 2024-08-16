import Image from 'next/image';
import Link from 'next/link';
import Loader from '../components/Loader';
import Mobile from '../components/MobileVersion'
import Navbar from '../components/Navbar';
import Search from '../components/SearchBox'
import Footer from '../components/Footer'



function news() {
    return (
        <>
            <Loader />
            <Navbar />
            <Search />
            <Mobile />

            <header className="page-header" >
                <div className="container">
                    <h1>الأخبار</h1>
                    <h6> أحدث أخبار شركة دلتا ميكس للخرسانة الجاهزة و آخر التطورات والمشاريع الجديدة في مجال البناء والإنشاءات.</h6>
                    <ul>
                        <li><a href="#">الرئيسية</a></li>
                        <li>الأخبار</li>
                    </ul>
                </div>
                {/*<!-- end Header -->*/}
            </header>
            <section className="content-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="news-box" id= '1'>
                                <figure>
                                    {/*<!-- Post Image -->*/}
                                    <Image src="/images/last-news/nadwa.jpg" alt="Image" width={1920} height={400} />
                                </figure>
                                <div className="content">
                                    {/*<!-- Entry Date -->*/}
                                    <small>29 فبراير, 2020</small>
                                    {/*<!-- Title -->*/}
                                    <h3>
                                        <Link href="/news/news-single">
                                            إفتتاح محطة دلتا ميكس فى كفر الزيات
                                        </Link>
                                    </h3>
                                    {/*<!-- author -->*/}
                                    <div className="author">
                                        <Image src="/images/author01.png" alt="Image" width={58} height={50} />
                                        <span>بواسطة <b>Abdullah Hamdy</b></span>
                                    </div>
                                </div>
                            </div>

                            <div className="news-box" id= '2'>
                                <figure>
                                    <Image src="/images/Projects/5.jpg" alt="Image" width={1920} height={400} />
                                </figure>
                                <div className="content">
                                    <small>29 فبراير, 2020</small>
                                    <h3>
                                        <Link href="/news/news-single">
                                            مبنى الخدمات الطلابية - جامعة طنطا
                                        </Link>
                                    </h3>
                                    <div className="author">
                                        <Image src="/images/author01.png" alt="Image" width={58} height={50} />
                                        <span>بواسطة <b>Abdullah Hamdy</b></span>
                                    </div>
                                </div>
                            </div>

                            <div className="news-box" id= '3'>
                                <figure>
                                    <Image src="/images/Projects/7.jpg" alt="Image" width={1920} height={400} />
                                </figure>
                                <div className="content">
                                    <small>29 فبراير, 2020</small>
                                    <h3>
                                        <Link href="/news/news-single">
                                            كلية الهندسة - جامعة طنطا
                                        </Link>
                                    </h3>
                                    <div className="author">
                                        <Image src="/images/author01.png" alt="Image" width={58} height={50} />
                                        <span>بواسطة <b>Abdullah Hamdy</b></span>
                                    </div>
                                </div>
                            </div>

                            <ul className="pagination">
                                <li className="page-item">
                                    <a className="page-link" href="#">السابق</a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link" href="#">التالى</a>
                                </li>
                            </ul>
                        </div>

                        <div className="col-lg-4">
                            <aside className="sidebar">
                                <div className="widget">
                                    <h6 className="widget-title">البحث</h6>
                                    <form>
                                        <input type="search" placeholder="إكتب كلمة للبحث" />
                                        <input type="submit" value="إبحث" />
                                    </form>
                                </div>

                            </aside>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}

export default news