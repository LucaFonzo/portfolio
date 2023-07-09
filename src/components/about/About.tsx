import './About.css';


function About() {
  return (
    <div className='container' id='about'>
      <h2 className='text-center about'>About Me</h2>
      <div className='about-container'>
        <div>
          <h3 className='know-me-about text-center'>Know Me</h3>
          <div className='about-details'>
            <p>Actually i'am a student looking for a back-end developer position.</p>
            <p>I'am very familiarized with creation of back end applications like REST API and uses of sockets using the javascript runtime NodeJS</p>
            <p>I have a strong knowledge on the basics of progamming like POO,functional progamming and pattern designs also i'am familiarized with SQL databases and learning NoSQl databases.</p>
          </div>
        </div>
        <div>
          <h3 className='skills-about text-center'>My Technical Skills</h3>
          <div className='skills'>
            <div className='skill'>HTML</div>
            <div className='skill'>CSS</div>
            <div className='skill'>JavaScript</div>
            <div className='skill'>NodeJS</div>
            <div className='skill'>Git</div>
            <div className='skill'>GitHub</div>
            <div className='skill'>SQL</div>
            <div className='skill'>PostgreSQL</div>
            <div className='skill'>Rest API</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;