function About() {
  return (
    <section id="about" className="section section-alt">
      <div className="container about-layout">
        <div>
          <p className="eyebrow">01 / ABOUT</p>
          <h2 className="section-title">Curiosity into <span>capability.</span></h2>
        </div>
        <div className="about-copy">
          <p>
            I'm a Cybersecurity Engineering student at Universidad Fidélitas in Costa Rica, interested in how
            security teams detect, investigate, and respond to threats.
          </p>
          <p>
            I learn by building: from SIEM-style monitoring and defensive automation to Windows hardening
            checks and hardware experiments. My goal is to grow into a Security Operations / Blue Team role
            while continuing to explore AI security and ethical hacking.
          </p>
          <div className="about-facts">
            <div><span className="fact-number">01</span><span>Hands-on projects</span></div>
            <div><span className="fact-number">02</span><span>Continuous learning</span></div>
            <div><span className="fact-number">03</span><span>Defensive mindset</span></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
