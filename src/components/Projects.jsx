function ProjectCard({ title, description, tags }) {
  return (
    <div className="col-md-6 col-lg-4 mb-4">
      <div className="card h-100 shadow-sm">
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <div className="d-flex flex-wrap gap-1">
            {tags.map(tag => (
              <span key={tag} className="badge bg-warning text-dark">{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function Projects() {
  const projects = [
    { title: 'Task Manager', description: 'A to-do app with React hooks.', tags: ['React', 'CSS'] },
    { title: 'Weather App', description: 'Live weather using a public API.', tags: ['JavaScript', 'API'] },
    { title: 'Portfolio Site', description: 'This portfolio built with React + Bootstrap.', tags: ['React', 'Bootstrap'] },
  ]
  return (
    <section id="projects" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-5">Projects</h2>
        <div className="row">
          {projects.map(p => <ProjectCard key={p.title} {...p} />)}
        </div>
      </div>
    </section>
  )
}
export default Projects