
function Testimonials() {
    return (
        <>
            <section id="testimonials"
                className="navbar-is-white text-white section pp-scrollable d-flex align-items-center position-absolute"
                style={{ backgroundImage: "url('img/bg/testimonials.jpg')" }}>
                <div className="intro">
                    <div className="scroll-wrap">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 col-xl-5">
                                    <span className="icon-quote text-primary">"</span>
                                    <h2 className="title-uppercase text-white">Hey, this is <span
                                        className="text-primary">testimonials</span> from my best clients & partners</h2>
                                </div>
                                <div className="col-lg-5 col-xl-5  offset-lg-1 offset-xl-2">
                                    <div className="carousel-testimonials owl-carousel">
                                        <div>
                                            <p className="mb-5"><strong>Amanda</strong><br />Apple inc.</p>
                                            <p>“There are many variations of passages of Lorem Ipsum available, but the
                                                majority have suffered alteration in some form, by injected humour, or
                                                randomised words which don't look even slightly believable. If you are going
                                                to use a passage of Lorem Ipsum, you need to be sure there isn't anything..
                                            </p>

                                        </div>
                                        <div>
                                            <p className="mb-5"><strong>John</strong><br />Google</p>
                                            <p>“ If you are seeking an Interior designer that will understand exactly your
                                                needs, and someone who will utilise their creative and technical skills in
                                                parity with your taste, then Suzanne at The Bauhaus Studio is perfect.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Testimonials