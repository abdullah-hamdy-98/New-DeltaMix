import Image from 'next/image';
import Loader from '../../components/Loader';
import Mobile from '../../components/MobileVersion'
import Navbar from '../../components/Navbar';
import Search from '../../components/SearchBox'
import Footer from '../../components/Footer'




function singleNews() {
    return (
        <>
            <Loader />
            <Navbar />
            <Search />
            <Mobile />

            <header className="page-header" >
                <div className="container">
                    <h1>المحطات</h1>
                    <h6> أحدث أخبار شركة دلتا ميكس للخرسانة الجاهزة و آخر التطورات والمشاريع الجديدة في مجال البناء والإنشاءات.</h6>
                    <ul>
                        <li><a href="/">الرئيسية</a></li>
                        <li>المحطات</li>
                    </ul>
                </div>
                {/*<!-- end Header -->*/}
            </header>

            <section className="content-section">
                <div className="container">
                    <div className="row align-items-center" style={{textAlign:'right'}}>
                        <div className="col-lg-5">
                            <h3>
                                <strong>محطة دفرة</strong>
                            </h3>
                            <p>
                            محطة دلتا ميكس فرع دفره لإنتاج الخرسانة الجاهزة هي محطة متطورة تقع في موقع استراتيجي يسهل
                             الوصول إلى مواقع البناء. تعتمد على تقنيات حديثة وفريق مهندسين ذوي خبرة لضمان
                             إنتاج خرسانة عالية الجودة. تقدم المحطة مجموعة متنوعة من الخرسانة لتلبية
                             احتياجات المشاريع السكنية والتجارية والصناعية، مع الالتزام بالمعايير البيئية
                            </p>
                        </div>
                        <div className="col-lg-7">
                            <div className="project-specifications">
                                <table width="100%" cellPadding="0" cellSpacing="0">
                                    <tbody>
                                        <tr>
                                            <td>الموقع</td>
                                            <td>دفرة – طريق القاهره اسكندرية الزراعي بجوار توكيل هيونداي</td>
                                        </tr>
                                        <tr>
                                            <td>نوع المحطة</td>
                                            <td>O-couhhi</td>
                                        </tr>
                                        <tr>
                                            <td>بلد المنشأ</td>
                                            <td>ايطالي</td>
                                        </tr>
                                        <tr>
                                            <td>موديل</td>
                                            <td>2013</td>
                                        </tr>
                                        <tr>
                                            <td>إنتاجية المحطة</td>
                                            <td>80 م3 \ ساعة</td>
                                        </tr>
                                        <tr>
                                            <td>سعة السيلوهات</td>
                                            <td>300 طن - بالاضافة الى و جود مهزة للرمل و مهزة للسن</td>
                                        </tr>
                                        <tr>
                                            <td>التوزيع الجغرافى</td>
                                            <td> الغربية إلى القليبوبية و كفر الشيخ</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>

    )
}

export default singleNews;