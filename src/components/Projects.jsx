const projects = [
  {
    number: '01',
    icon: '◉',
    title: 'NexusSIEM',
    category: 'BLUE TEAM / SECURITY MONITORING',
    description: 'A SIEM-style security monitoring project that collects signals, generates alerts, and supports automated defensive actions. Built around a Linux VM with a Flask service and Microsoft Teams Adaptive Cards.',
    tags: ['Python', 'Flask', 'Linux', 'Teams', 'Firewall'],
    href: 'https://github.com/GaboX280/NexusSIEM',
    linkLabel: 'View repository',
  },
  {
    number: '02',
    icon: '⛨',
    title: 'Atom-Hardening',
    category: 'WINDOWS SECURITY / AUDITING',
    description: 'A Windows security auditing and hardening tool that evaluates configuration checks, reports findings, and produces a score to help make security gaps easier to review.',
    tags: ['Python', 'Windows', 'Hardening', 'Audit'],
    href: 'https://github.com/GaboX280/Atom-Hardening',
    linkLabel: 'View repository',
  },
  {
    number: '03',
    icon: '⌘',
    title: 'DaemonHID',
    category: 'HARDWARE / SECURITY EXPERIMENTS',
    description: 'An Arduino UNO R4 WiFi learning project exploring device interaction and command handling over a small local access point, with a focus on documenting reproducible experiments.',
    tags: ['Arduino', 'C++', 'Wi-Fi', 'Hardware'],
    href: 'https://github.com/GaboX280/DaemonHID',
    linkLabel: 'View repository',
  },
]

function Projects() {
  return (
    <section id="projects" className="section section-alt">
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">03 / SELECTED WORK</p>
            <h2 className="section-title">Built to learn. <span>Made to solve.</span></h2>
          </div>
          <p className="section-note">
            Practical projects where I turn cybersecurity concepts into working experiments and tools.
          </p>
        </div>
        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-top">
                <span className="project-icon" aria-hidden="true">{project.icon}</span>
                <span className="project-index">{project.number} / 03</span>
              </div>
              <p className="eyebrow">{project.category}</p>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
              <a className="project-link" href={project.href} target="_blank" rel="noreferrer">
                {project.linkLabel} <span aria-hidden="true">↗</span>
              </a>
            </article>
          ))}
        </div>
        <p className="project-footnote">
          These are personal and learning projects. Descriptions focus on implemented work; planned experiments are not listed as completed projects.
        </p>
      </div>
    </section>
  )
}

export default Projects
