import './Footer.css'

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className='footer-site'>
      <div className='container'>
        <div className='footer-media'>
          <div>
            <h4>&copy; Luca Fonzo { year }</h4>
          </div>
          <div>
            <span className='social-title'>Social</span>
            <div className='social-medias'>
              <div className='icon'><a href='https://www.linkedin.com/in/luca-fonzo-1ba3b11b8/' target='blank'><i className="fa-brands fa-linkedin"></i></a></div>
              <div className='icon'><a href='https://github.com/LucaFonzo' target='blank'><i className="fa-brands fa-github"></i></a></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer