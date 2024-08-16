import Loader from '../components/Loader';
import Mobile from '../components/MobileVersion'
import Navbar from '../components/Navbar';
import Search from '../components/SearchBox'
import Footer from '../components/Footer'
import Image from 'next/image'
import Link from 'next/link'

function station() {
    return (
        <>
            <Loader />
            <Navbar />
            <Search />
            <Mobile />

            <header className="page-header" >
                <div className="container">
                    <h1>المحطات</h1>
                    <h6> نظرا الى سرعة نمو المحطات و إثبات الكفاءة أمام جميع المنافسين فى ميدان العمل . فتم التطلع لفتح اسواق جديدة لتوسعة النطاق الجغرافي . </h6>
                    <ul>
                        <li><a href="#">الرئيسية</a></li>
                        <li>المحطات</li>
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
                                    { className: 'one', imgSrc: '/images/stations/Defra.jpg', title: 'محطة دفرة' },
                                    { className: 'two', imgSrc: '/images/stations/Kafr.jpg', title: 'محطة كفر الزيات' },
                                    { className: 'three', imgSrc: '/images/stations/concrete-lab.jpg', title: 'المعمل' },
                                    { className: 'one', imgSrc: '/images/stations/Equipmen.jpg', title: 'المعدات' }


                                ].map((project, index) => (
                                    <li className={project.className} key={index}>
                                        <figure className="project-box">
                                            <Image src={project.imgSrc} alt="Image" height={400} width={1920} />
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

export default station