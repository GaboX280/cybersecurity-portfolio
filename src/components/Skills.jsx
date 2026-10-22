const skillGroups = [
  {
    title: 'Security & Operations',
    icon: '⌁',
    skills: [
      { name: 'Security Operations', icon: '⌖' },
      { name: 'SIEM & Alerting', icon: '◉' },
      { name: 'Log Analysis', icon: '≋' },
      { name: 'Windows Hardening', icon: '▣' },
      { name: 'Networking', icon: '⌘' },
      { name: 'Firewall Fundamentals', icon: '⛨' },
    ],
  },
  {
    title: 'Development & Systems',
    icon: '</>',
    skills: [
      { name: 'Python', icon: 'devicon-python-plain colored' },
      { name: 'Linux', icon: 'devicon-linux-plain' },
      { name: 'Git', icon: 'devicon-git-plain colored' },
      { name: 'GitHub', icon: 'devicon-github-original' },
      { name: 'Flask', icon: 'devicon-flask-original' },
      { name: 'SQLite', icon: 'devicon-sqlite-plain colored' },
      { name: 'HTML5', icon: 'devicon-html5-plain colored' },
      { name: 'CSS3', icon: 'devicon-css3-plain colored' },
      { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
      { name: 'React', icon: 'devicon-react-original colored' },
    ],
  },
  {
    title: 'Platforms & Hands-on Learning',
    icon: '⌬',
    skills: [
      { name: 'Microsoft Azure', icon: 'devicon-azure-plain colored' },
      { name: 'Windows', icon: 'devicon-windows11-original colored' },
      { name: 'Arduino', icon: 'devicon-arduino-plain colored' },
      { name: 'Cisco Networking', icon: 'devicon-cisco-plain colored' },
      { name: 'Fortinet', icon: '⛨' },
      { name: 'TryHackMe', icon: '⌖' },
      { name: 'Ollama / Local AI', icon: '◌' },
    ],
  },
]

function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">02 / TOOLKIT</p>
            <h2 className="section-title">Technologies & <span>skills.</span></h2>
          </div>
          <p className="section-note">
            Tools I've studied, practiced, or used while building projects. Still learning, always improving.
          </p>
        </div>
        <div className="skills-grid">
          {skillGroups.map((group) => (
            <article className="skill-group" key={group.title}>
              <h3><span>{group.icon.startsWith('devicon-') ? <i className={group.icon} aria-hidden="true" /> : group.icon}</span>{group.title}</h3>
              <div className="skill-items">
                {group.skills.map((skill) => (
                  <span className="skill-chip" key={skill.name}>
                    {skill.icon.startsWith('devicon-')
                      ? <i className={skill.icon} aria-hidden="true" />
                      : <span aria-hidden="true">{skill.icon}</span>}
                    {skill.name}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
