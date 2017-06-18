import React from 'react'


const About = () => {
  return (
    <div className='container'>
    <div className='about-text'>
      <p className='about-header'>Introducing Team Hoppers!</p>
      <p>We are a coding team of three junior developers who decided to take a risk, quit our day jobs, and learn computer coding.
        We are a diverse bunch, our team comprises of a lawyer, a pastry chef and a social-scientist.
        As an all female coding team, we are inspired by Grace Hopper, one of the world's first computer scientists.
      </p>
      <p>Thus the name Team Hoppers!</p>

      <div>
        <img className='hopper-img'src={'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Grace_Hopper_and_UNIVAC.jpg/220px-Grace_Hopper_and_UNIVAC.jpg'}></img>
      </div>
      <hr/>
      <p>Although we come from very different backgrounds, we share a passion for sustainability and social change.
        Our goal was to solve a local problem through technology, so we decided to bulid an app that helps make recycling easier for Wellingtonians.
        If you have any questions about this project, or you know of other organisations that would like to get involved, feel free to contact us through the contact form.
      </p>
    <div className='about-closing-text'>
      <p>Happy recycling!</p>
        <img className='mulledwine-img'src='/images/mulledwine.jpg'></img>
        <hr/>
      <p>Love Team Hoppers x</p>
    </div>
  </div>
</div>
  )
}

export default About
