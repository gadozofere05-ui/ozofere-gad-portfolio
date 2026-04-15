function SkillBar({ name, level }) {
  return (
    <div className="mb-3">
      <div className="d-flex justify-content-between">
        <span>{name}</span><span>{level}%</span>
      </div>
      <div className="progress">
        <div className="progress-bar bg-warning" style={{ width: `${level}%` }}></div>
      </div>
    </div>
  )
}

function Skills() {
  const skills = [
    { name: 'HTML & CSS', level: 90 },
    { name: 'JavaScript', level: 80 },
    { name: 'React', level: 75 },
    { name: 'Bootstrap', level: 85 },
    { name: 'Git & GitHub', level: 70 },
  ]
  return (
    <section id="skills" className="py-5">
      <div className="container">
        <h2 className="text-center mb-5">My Skills</h2>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            {skills.map(s => <SkillBar key={s.name} {...s} />)}
          </div>
        </div>
      </div>
    </section>
  )
}
export default Skills