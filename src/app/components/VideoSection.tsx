function VideoSection() {
    return (
        <>
            <section className="content-section no-spacing white-space-top" style={{ backgroundColor: '#f7f6f1' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="video-box">
                                <video src="video/video-section.mp4" autoPlay muted loop playsInline></video>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default VideoSection;