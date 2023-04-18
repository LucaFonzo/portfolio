import './Navbar.css'

function Navbar() {
  return (
    <header className='header'>
      <div className='container navbar-container'>
        <div>
          <div><span className='name'>Luca Fonzo</span></div>
        </div>
        <ul className='navbar-list'>
            <li><a href='#home'>Home</a></li>
            <li><a href='#about'>About</a></li>
        </ul>
      </div>
    </header>
  )
}

export default Navbar