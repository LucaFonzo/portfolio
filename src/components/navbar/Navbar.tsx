import './Navbar.css'

function Navbar() {
  return (
    <header className='header'>
      <div className='container navbar-container'>
        <div>
          <div><span>Luca Fonzo</span></div>
        </div>
        <ul className='navbar-list'>
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Contact</li>
        </ul>
      </div>
    </header>
  )
}

export default Navbar