import Image from 'next/image';
import Loader from '../../components/Loader';
import Mobile from '../../components/MobileVersion'
import Navbar from '../../components/Navbar';
import Search from '../../components/SearchBox'
import Footer from '../../components/Footer'
import { getSingleArticle } from '@/apiCalls/NewsApiCalls';
import { SingleNews } from '@/utils/types';


interface SinqleNewsProps {
    params: { id: string }
}


async function singleNews({ params }: SinqleNewsProps) {

    const news: SingleNews = await getSingleArticle(params.id)


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
                        <li><a href="/">الرئيسية</a></li>
                        <li>الأخبار</li>
                    </ul>
                </div>
                {/*<!-- end Header -->*/}
            </header>

            <section className="content-section">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-8">

                            <div className="news-box">
                                <figure>
                                    <Image
                                        src={news.Img}
                                        alt={news.Title}
                                        width={1920}
                                        height={400} />
                                </figure>
                                <div className="content">
                                    {/* EntryDate */}
                                    <small>{new Date(news.EntryDate).toLocaleDateString('ar-Eg', { year: 'numeric', month: 'long', day: 'numeric' })}</small>
                                    {/* Title */}
                                    <h3>{news.Title}</h3>
                                    <div className="author">
                                        <Image src="/images/author01.png" alt="Image" width={58} height={50} />
                                        <span>بواسطة <b>Abdullah Hamdy</b></span>
                                    </div>
                                    {/* Dscr */}
                                    <div className="content">
                                        {news.Dscr}
                                    </div>
                                </div>
                            </div>

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

export default singleNews;