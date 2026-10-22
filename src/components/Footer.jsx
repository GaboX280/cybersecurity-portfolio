function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>© {new Date().getFullYear()} Gabriel Villalobos Alpízar · GaboX280</p>
        <p>Designed with curiosity <span aria-hidden="true">✳</span> and built with React.</p>
        <a href="#home">Back to top ↑</a>
      </div>
    </footer>
  )
}

export default Footer
