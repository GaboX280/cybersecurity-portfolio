const tech = [
  { name: 'Python', icon: 'devicon-python-plain colored' },
  { name: 'Linux', icon: 'devicon-linux-plain' },
  { name: 'Git', icon: 'devicon-git-plain colored' },
  { name: 'Azure', icon: 'devicon-azure-plain colored' },
]

function Hero() {
  return (
    <section className="hero container" id="home">
      <div className="hero-copy">
        <p className="eyebrow"><span className="status-dot" /> CYBERSECURITY • BLUE TEAM • AUTOMATION</p>
        <h1>Gabriel Villalobos <span>Alpízar</span></h1>
        <h2>Cybersecurity Engineering Student</h2>
        <p className="hero-description">
          I build practical security tools, explore defensive technologies, and automate security workflows.
          Focused on Security Operations, threat monitoring, and hands-on learning.
        </p>
        <div className="hero-actions">
          <a href="#projects" className="button button-primary">Explore my work <span aria-hidden="true">↘</span></a>
          <a href="https://www.linkedin.com/in/gabriel-villalobos-alpizar/" className="button button-secondary" target="_blank" rel="noreferrer">Connect on LinkedIn ↗</a>
        </div>
        <div className="hero-tech" aria-label="Selected technologies">
          <span className="hero-tech-label">TOOLS I WORK WITH</span>
          {tech.map((item) => (
            <span className="hero-tech-item" key={item.name}><i className={item.icon} aria-hidden="true" /> {item.name}</span>
          ))}
        </div>
      </div>
      <div className="hero-visual" aria-label="Cybersecurity terminal illustration">
        <div className="terminal-window">
          <div className="terminal-top"><span /><span /><span /><p>gabo@blue-team:~</p></div>
          <div className="terminal-body">
            <p><span className="terminal-prompt">gabo@blue-team</span>:~$ whoami</p>
            <p className="terminal-output">cybersecurity_student</p>
            <p><span className="terminal-prompt">gabo@blue-team</span>:~$ focus --current</p>
            <p className="terminal-output">security_operations</p>
            <p className="terminal-output">threat_monitoring</p>
            <p className="terminal-output">defensive_automation</p>
            <p><span className="terminal-prompt">gabo@blue-team</span>:~$ <span className="cursor">▋</span></p>
          </div>
          <div className="terminal-status"><span className="status-dot" /> LEARNING · BUILDING · IMPROVING</div>
        </div>
        <div className="visual-orbit orbit-one" />
        <div className="visual-orbit orbit-two" />
      </div>
      <a href="#about" className="scroll-cue" aria-label="Scroll to About section">SCROLL TO EXPLORE <span>↓</span></a>
    </section>
  )
}

export default Hero
