import Image from 'next/image';
import Link from 'next/link';
import Loader from '../components/Loader';
import Mobile from '../components/MobileVersion';
import Navbar from '../components/Navbar';
import Search from '../components/SearchBox';
import Footer from '../components/Footer';
import { News } from '@prisma/client';
import { getNews, getNewsCount } from '@/apiCalls/NewsApiCalls'
import { newsPerPage } from '@/utils/constants';

interface NewsPageProps {
    searchParams: { pageNumber: string }
}


const NewsPage = async ({ searchParams }: NewsPageProps) => {
    const { pageNumber } = searchParams;

    const news: News[] = await getNews(pageNumber)
    const count: number = await getNewsCount();
    const pages = Math.ceil(count / newsPerPage)

    let pagesArray: number[] = [];
    for (let i = 1; i <= pages; i++) pagesArray.push(i);

    const route = '/news'

    return (
        <>
            <Loader />
            <Navbar />
            <Search />
            <Mobile />

            <header className="page-header">
                <div className="container">
                    <h1>الأخبار</h1>
                    <h6>أحدث أخبار شركة دلتا ميكس للخرسانة الجاهزة و آخر التطورات والمشاريع الجديدة في مجال البناء والإنشاءات.</h6>
                    <ul>
                        <li><a href="#">الرئيسية</a></li>
                        <li>الأخبار</li>
                    </ul>
                </div>
            </header>

            <section className="content-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            {news.map((item) => (
                                <div className="news-box" key={item.Id}>
                                    <figure>
                                        <Image
                                            src={item.Img}
                                            alt={item.Title}
                                            width={1920}
                                            height={400}
                                        />
                                    </figure>
                                    <div className="content">
                                        <small>{new Date(item.EntryDate).toLocaleDateString('ar-Eg', { year: 'numeric', month: 'long', day: 'numeric' })}</small>
                                        <h3>
                                            <Link href={`/news/${item.Id}`}>
                                                {item.Title}
                                            </Link>
                                        </h3>
                                        <div className="author">
                                            <Image
                                                src="/images/author01.png"
                                                alt="Author Image"
                                                width={54}
                                                height={50}
                                            />
                                            <span>بواسطة <b>Abdullah Hamdy</b></span>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            <div className="pagination">
                                {parseInt(pageNumber) !== 1 &&
                                    <Link className="page-item page-link" href={`${route}?pageNumber=${parseInt(pageNumber) - 1}`}>
                                        السابق
                                    </Link>
                                }

                                {parseInt(pageNumber) !== pages &&
                                    <Link className="page-item page-link" href={`${route}?pageNumber=${parseInt(pageNumber) + 1}`}>
                                        التالى
                                    </Link>}

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
    );
}

export default NewsPage;
