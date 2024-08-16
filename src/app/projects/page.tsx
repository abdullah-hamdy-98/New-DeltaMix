import Loader from '../components/Loader';
import Mobile from '../components/MobileVersion'
import Navbar from '../components/Navbar';
import Search from '../components/SearchBox'
import Footer from '../components/Footer'
import Image from 'next/image'


function Projects() {
    return (
        <>
            <Loader />
            <Navbar />
            <Search />
            <Mobile />

            <header className="page-header" >
                <div className="container">
                    <h1>المشروعات</h1>
                    <h6> نظرا الى سرعة نمو المحطات و إثبات الكفاءة أمام جميع المنافسين فى ميدان العمل . فتم التطلع لفتح اسواق جديدة لتوسعة النطاق الجغرافي . </h6>
                    <ul>
                        <li><a href="/">الرئيسية</a></li>
                        <li>المشروعات</li>
                    </ul>
                </div>
                {/*<!-- end container -->*/}
            </header>

            <section className="content-section">
                <div className="container">
                    <div className="row">
                       
                        {/* end col-12 */}
                        <div className="col-12">
                            <ul className="projects">
                                {[
                                    { className: 'one', imgSrc: '/images/Projects/1.jpg', title: 'إعمار الأشرف' },
                                    { className: 'two', imgSrc: '/images/Projects/2.jpg', title: 'إعمار الحرية' },
                                    { className: 'three', imgSrc: '/images/Projects/3.jpg', title: 'إعمار العرب' },
                                    { className: 'one', imgSrc: '/images/Projects/4.jpg', title: 'كلية التربية - جامعة طنطا' },
                                    { className: 'two', imgSrc: '/images/Projects/5.jpg', title: 'مبنى الخدمات الطلابية - جامعة طنطا' },
                                    { className: 'three', imgSrc: '/images/Projects/6.jpg', title: 'مول العاصمة' },
                                    { className: 'three', imgSrc: '/images/Projects/7.jpg', title: 'كلية الهندسة - جامعة طنطا' }
                              
                                ].map((project, index) => (
                                    <li className={project.className} key={index}>
                                        <figure className="project-box">
                                                <Image src={project.imgSrc} alt="Image" height={370} width={1920} />
                                            <figcaption>
                                                <h5>{project.title}</h5>
                                            </figcaption>
                                        </figure>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {/* end col-12 */}
                    </div>
                    {/* end row */}
                </div>
                {/* end container */}
            </section>

            <Footer />
        </>
    )
}

export default Projects