const credentials = [
  { icon: '◈', title: 'Security Operations Center in Practice', issuer: 'Fortinet · Course completion badge' },
  { icon: '⌖', title: 'SEC0 & SEC1', issuer: 'TryHackMe · Learning badges' },
  { icon: '◉', title: 'Getting Started with Cybersecurity', issuer: 'IBM SkillsBuild' },
  { icon: '⌘', title: 'Python Essentials 1 & 2', issuer: 'Cisco Networking Academy' },
  { icon: '⌁', title: 'Introduction to Networks', issuer: 'Cisco Networking Academy' },
  { icon: '▣', title: 'Linux Essentials', issuer: 'Linux Professional Institute learning course' },
  { icon: '☁', title: 'AWS Cloud Computing 101', issuer: 'AWS training' },
  { icon: '</>', title: 'Routing and Switching Fundamentals', issuer: 'Cisco Networking Academy' },
]

function Certifications() {
  return (
    <section id="certifications" className="section">
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">04 / CONTINUOUS LEARNING</p>
            <h2 className="section-title">Courses & <span>credentials.</span></h2>
          </div>
          <p className="section-note">
            A growing foundation across defensive security, networking, operating systems, and programming.
          </p>
        </div>
        <div className="credentials-grid">
          {credentials.map((item) => (
            <article className="credential" key={item.title}>
              <span className="credential-icon" aria-hidden="true">{item.icon}</span>
              <div><h3>{item.title}</h3><p>{item.issuer}</p></div>
            </article>
          ))}
        </div>
        <p className="credentials-note">
          This section lists completed courses and learning credentials, not professional certifications that require a separate certification exam.
        </p>
      </div>
    </section>
  )
}

export default Certifications
