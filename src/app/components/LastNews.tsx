import Link from 'next/link';
import { News } from '@prisma/client';
import { getHomeNews } from '@/apiCalls/NewsApiCalls';

async function LastNews() {
    const news: News[] = await getHomeNews();

    // Render the first three news items
    const firstNews = news[0];
    const otherNews = news.slice(1, 3);

    return (
        <section className="content-section">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="section-title">
                            <h6>أحدث الأخبار</h6>
                        </div>
                    </div>

                    {/* Display the first news item prominently */}
                    {firstNews && (
                        <div className="col-lg-5">
                            <div className="recent-news">
                                <figure>
                                    <img src={firstNews.Img} alt={firstNews.Title} />
                                </figure>
                                <div className="content">
                                    <small>{new Date(firstNews.EntryDate).toLocaleDateString('ar-EG', { year: 'numeric', month: 'long', day: 'numeric' })}</small>
                                    <h3>
                                        <Link href={`/news/${firstNews.Id}`}>
                                            {firstNews.Title}
                                        </Link>
                                    </h3>
                                    <div className="author">
                                        <img src="/images/author01.png" alt="Image" />
                                        <span>
                                            بواسطة <b>Abdullah Hamdy</b> {/* You may want to dynamically fetch author data */}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Display the next two news items in a smaller format */}
                    <div className="col-lg-7">
                        <div className="row inner">
                            {otherNews.map((item) => (
                                <div className="col-md-6" key={item.Id}>
                                    <div className="recent-news">
                                        <figure>
                                            <img src={item.Img} alt={item.Title} />
                                        </figure>
                                        <div className="content">
                                            <small>{new Date(item.EntryDate).toLocaleDateString('ar-EG', { year: 'numeric', month: 'long', day: 'numeric' })}</small>
                                            <h3>
                                                <Link href={`/news/${item.Id}`}>
                                                    {item.Title}
                                                </Link>
                                            </h3>
                                            <div className="author">
                                                <img src="/images/author01.png" alt="Image" />
                                                <span>
                                                    بواسطة <b>Abdullah Hamdy</b> {/* You may want to dynamically fetch author data */}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default LastNews;
