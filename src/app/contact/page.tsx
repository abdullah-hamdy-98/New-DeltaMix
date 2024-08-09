import Loader from '../components/Loader';
import Mobile from '../components/MobileVersion'
import Navbar from '../components/Navbar';
import Search from '../components/SearchBox'
import Footer from '../components/Footer'


function station() {
    return (
        <>
            <Loader />
            <Navbar />
            <Search />
            <Mobile />

            <header className="page-header" >
                <div className="container">
                    <h1>تواصل معنا</h1>
                    <h6> نظرا الى سرعة نمو المحطات و إثبات الكفاءة أمام جميع المنافسين فى ميدان العمل . فتم التطلع لفتح اسواق جديدة لتوسعة النطاق الجغرافي . </h6>
                    <ul>
                        <li><a href="#">الرئيسية</a></li>
                        <li>تواصل معنا</li>
                    </ul>
                </div>
                {/*<!-- end container -->*/}
            </header>

            <section className="content-section">
            </section>

            <Footer />
        </>
    )
}

export default station