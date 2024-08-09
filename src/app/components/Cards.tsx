import Image from 'next/image';
import Link from 'next/link';

function Cards() {
    return (
        <>
            <section className="content-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="icon-content">
                                <figure>
                                    <Image src="/images/icon03.png" alt="Image" width={100} height={100} />
                                </figure>
                                <h3>المحطات</h3>
                                <small>The awards for design, creativity and innovation on the Internet</small>
                                <Link href="#">+</Link>
                            </div>
                            {/* end icon-content */}
                        </div>
                        {/* end col-4 */}
                        <div className="col-lg-4">
                            <div className="icon-content">
                                <figure>
                                    <Image src="/images/icon01.png" alt="Image" width={100} height={100} />
                                </figure>
                                <h3>المعمل</h3>
                                <small>Twenty spring of in esteem spirit likely estate continue new building</small>
                                <Link href="#">+</Link>
                            </div>
                            {/* end icon-content */}
                        </div>
                        {/* end col-4 */}
                        <div className="col-lg-4">
                            <div className="icon-content">
                                <figure>
                                    <Image src="/images/icon02.png" alt="Image" width={100} height={100} />
                                </figure>
                                <h3>الطوب الأسمنتى الخفيف</h3>
                                <small>Sympathize it projection ye insipidity celebrated our pianoforte</small>
                                <Link href="#">+</Link>
                            </div>
                            {/* end icon-content */}
                        </div>
                        {/* end col-4 */}
                    </div>
                    {/* end row */}
                </div>
                {/* end container */}
            </section>
        </>
    )
}


export default Cards;