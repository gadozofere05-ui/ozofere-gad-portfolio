function Contact() {
  return (
    <section id="contact" className="py-5">
      <div className="container">
        <h2 className="text-center mb-5">Contact Me</h2>
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="mb-3">
              <input type="text" className="form-control" placeholder="Your Name" />
            </div>
            <div className="mb-3">
              <input type="email" className="form-control" placeholder="Your Email" />
            </div>
            <div className="mb-3">
              <textarea className="form-control" rows="5" placeholder="Your Message"></textarea>
            </div>
            <button className="btn btn-warning w-100">Send Message</button>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Contact