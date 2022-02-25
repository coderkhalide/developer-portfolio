
function Contact() {
    return (
        <>
            <section id="contact" className="navbar-is-white text-white section pp-scrollable position-absolute"
                style={{ backgroundImage: "url('img/bg/masthead.jpg')" }}>
                <div className="intro">
                    <div className="scroll-wrap">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-4">
                                    <h2 className="text-white">Contact</h2>
                                    <p className="text-muted">You'll called for yielding male, so lights
                                        Stars abundantly, is their.</p>
                                    <h3 className="text-white mt-5 pt-5">69 Queen St, Melbourne Australia</h3>
                                    <h3 className="text-white">(+706) 898-0751</h3>
                                    <p className="text-muted mt-3">Denzel.design@gmail.com</p>
                                </div>
                                <div className="col-md-5 offset-md-2">
                                    <h3 className="text-white mt-0">Let's grab a coffee and jump on conversation <span
                                        className="text-primary">chat with me.</span></h3>
                                    <div className="mt-5">
                                        <form className="js-ajax-form">
                                            <div className="form-group">
                                                <input type="text" name="name" className="form-control" placeholder="Name" />
                                            </div>
                                            <div className="form-group">
                                                <input type="email" name="email" className="form-control" required=""
                                                    placeholder="Email *" />
                                            </div>
                                            <div className="form-group">
                                                <textarea rows="3" name="message" className="form-control"
                                                    placeholder="Message"></textarea>
                                            </div>
                                            <div className="message" id="success-message">Your message is successfully sent...
                                            </div>
                                            <div className="message" id="error-message">Sorry something went wrong</div>
                                            <div className="form-group mb-0">
                                                <button type="submit" className="btn">Contact me</button>
                                            </div>
                                        </form>
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

export default Contact