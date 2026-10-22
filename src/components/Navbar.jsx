const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#certifications', label: 'Credentials' },
  { href: '#contact', label: 'Contact' },
]

function Navbar() {
  return (
    <header className="site-header">
      <nav className="navbar container" aria-label="Main navigation">
        <a href="#home" className="navbar-logo" aria-label="GaboX280 home">
          <span className="logo-mark">&gt;_</span> GABOX280
        </a>
        <div className="nav-links">
          {links.map((link) => (
            <a key={link.href} href={link.href}>{link.label}</a>
          ))}
        </div>
        <a className="nav-github" href="https://github.com/GaboX280" target="_blank" rel="noreferrer">
          <i className="devicon-github-original" aria-hidden="true" /> GitHub
        </a>
      </nav>
    </header>
  )
}

export default Navbar
