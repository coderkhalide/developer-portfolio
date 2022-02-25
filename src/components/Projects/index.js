
function Projects() {
    return (
        <>
            <section id="projects" className="navbar-is-white text-white section pp-scrollable position-absolute">
                <div className="project-wrap">
                    <div className="bg-changer">
                        <div className="section-bg active" style={{ backgroundImage: "url('img/bg/portfolio/bg1.jpg')" }}></div>
                        <div className="section-bg" style={{ backgroundImage: "url('img/bg/portfolio/bg2.jpg')" }}></div>
                        <div className="section-bg" style={{ backgroundImage: "url('img/bg/portfolio/bg3.jpg')" }}></div>
                        <div className="section-bg" style={{ backgroundImage: "url('img/bg/portfolio/bg4.jpg')" }}></div>
                        <div className="section-bg" style={{ backgroundImage: "url('img/bg/portfolio/bg5.jpg')" }}></div>
                        <div className="section-bg" style={{ backgroundImage: "url('img/bg/portfolio/bg6.jpg')" }}></div>
                    </div>
                    <div className="intro">
                        <div className="scroll-wrap">
                            <div className="container">
                                <h2 className="text-white mb-0">Latest projects</h2>
                                <div className="mt-5 pt-2">
                                    <div className="row-project-box row">
                                        <div className="col-project-box col-md-6 col-lg-4 col-xl-3">
                                            <a href="" className="project-box">
                                                <div className="project-box-inner">
                                                    <h4>Neon nature</h4>
                                                    <div className="project-category">Illustration</div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="col-project-box col-md-6 col-lg-4 col-xl-3">
                                            <a href="" className="project-box">
                                                <div className="project-box-inner">
                                                    <h4>Fashion Woman</h4>
                                                    <div className="project-category">Photography</div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="col-project-box col-md-6 col-lg-4 col-xl-3">
                                            <a href="" className="project-box">
                                                <div className="project-box-inner">
                                                    <h4>Apple macbook</h4>
                                                    <div className="project-category">Graphic Design</div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="col-project-box col-md-6 col-lg-4 col-xl-3">
                                            <a href="" className="project-box">
                                                <div className="project-box-inner">
                                                    <h4>Fox</h4>
                                                    <div className="project-category">Illustration</div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="col-project-box col-md-6 col-lg-4 col-xl-3">
                                            <a href="" className="project-box">
                                                <div className="project-box-inner">
                                                    <h4>Creative Mess</h4>
                                                    <div className="project-category">Graphic Design</div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="col-project-box col-md-6 col-lg-4 col-xl-3">
                                            <a href="" className="project-box">
                                                <div className="project-box-inner">
                                                    <h4>Coffee</h4>
                                                    <div className="project-category">Photography</div>
                                                </div>
                                            </a>
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

export default Projects