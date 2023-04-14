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
              <div className='icon'><i className="fa-brands fa-linkedin"></i></div>
              <div className='icon'><i className="fa-brands fa-github"></i></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer