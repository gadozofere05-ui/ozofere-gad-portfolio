function Hero() {
  return (
    <section id="home" className="bg-dark text-white d-flex align-items-center"
      style={{ minHeight: '100vh', paddingTop: '80px' }}>
      <div className="container text-center">
        <h1 className="display-3 fw-bold">Hi, I'm <span className="text-warning">Ozofere Gad</span></h1>
        <p className="lead mt-3">Frontend Developer · React · Bootstrap</p>
        <a href="#projects" className="btn btn-warning btn-lg mt-4 me-3">View Projects</a>
        <a href="#contact" className="btn btn-outline-light btn-lg mt-4">Contact Me</a>
      </div>
    </section>
  )
}
export default Hero