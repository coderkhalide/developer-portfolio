
function Skills() {
    return (
        <>
            <section id="skills" className="section pp-scrollable d-flex align-items-center position-absolute">
                <div className="intro">
                    <div className="scroll-wrap">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-5">
                                    <div className="position-relative">
                                        <div className="photo-icon photo-icon-1"><img alt="" className="w-100"
                                            src="img/100x100.jpg" /></div>
                                        <div className="photo-icon photo-icon-2"><img alt="" className="w-100" src="img/80x80.jpg" />
                                        </div>
                                        <div className="photo-icon photo-icon-3"><img alt="" className="w-100"
                                            src="img/100x100-2.jpg" /></div>
                                        <img alt="" className="border-radius w-100" src="img/445x459-2.jpg" />
                                    </div>
                                </div>
                                <div className="mt-5 mt-lg-0 col-lg-5 offset-lg-1">
                                    <h2>My mission is <span className="text-primary">develop</span> best design</h2>
                                    <p>I will help you build your brand and grow your business. I create clarifying
                                        strategy, beautiful logo and identity design.</p>
                                    <div className="mt-5 pt-2">
                                        <div className="progress-item">
                                            <div className="row">
                                                <h6 className="col-md-6 mt-0">Web Design</h6>
                                                <h6 className="col-md-6 text-right mt-0">80%</h6>
                                            </div>
                                            <div className="progress mb-5">
                                                <div className="progress-bar" role="progressbar" style={{width: "80%"}}
                                                    aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
                                                </div>
                                            </div>
                                        </div>
                                        <div className="progress-item">
                                            <div className="row">
                                                <h6 className="col-md-6 mt-0">Photoshop</h6>
                                                <h6 className="col-md-6 text-right mt-0">70%</h6>
                                            </div>
                                            <div className="progress mb-5">
                                                <div className="progress-bar" role="progressbar" style={{width: "70%"}}
                                                    aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </div>
                                        <div className="progress-item">
                                            <div className="row">
                                                <h6 className="col-md-6 mt-0">Media & Content</h6>
                                                <h6 className="col-md-6 text-right mt-0">90%</h6>
                                            </div>
                                            <div className="progress">
                                                <div className="progress-bar" role="progressbar" style={{width: "90%"}}
                                                    aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
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

export default Skills