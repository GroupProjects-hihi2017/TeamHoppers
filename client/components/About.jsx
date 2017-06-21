import React from 'react'

const About = () => {
  return (
    <div className = 'wallpaper-no-border'>
      <div className='container'>
        <div className='about-page'>
          <p className='about-title'>Introducing Team Hoppers!</p>
          <p className='about-text'>We are a coding team of three junior developers who decided to take a risk, quit our day jobs, and learn computer coding.
            We are a diverse bunch, our team comprises of a lawyer, a pastry chef and a social-scientist.
            As an all female coding team, we are inspired by Grace Hopper, one of the world's first computer scientists.
          </p>
          <p className='about-text'>Thus the name Team Hoppers!</p>
          <img className='hopper-img'src={'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Grace_Hopper_and_UNIVAC.jpg/220px-Grace_Hopper_and_UNIVAC.jpg'}></img>
          <hr/>
          <p className='about-text'>Although we come from very different backgrounds, we share a passion for sustainability and social change.
            Our goal was to solve a local problem through technology, so we decided to bulid an app that helps make recycling easier for Wellingtonians.
            If you have any questions about this project, or you know of other organisations that would like to get involved, feel free to contact us through the contact form.
          </p>
          <p className='about-header'>Happy recycling!</p>
          <img className='mulledwine-img'src='/images/mulledwine.jpg'></img>
          <hr/>
          <p className='about-header'>Love Team Hoppers x</p>
        </div>
      </div>
    </div>
  )
}

export default About
