import React from 'react'

export const Acerca = () => {
  return (
    <article className='container'>
    <section className="about" id="acerca">

    <figure className="about-banner">
     <img src="./src/assets/images/about-banner.png" alt="A man in a alice blue shirt with a thinking expression" className="w-100" />

    </figure>

    <div className="about-content section-content">

      <p className="section-subtitle">Acerca</p>

      <h2 className="h3 section-title">Need a Creative Product? I can Help You!</h2>

      <p className="section-text">
        Hi! I’m Jack Reacher, and I’m a developer who has passion for building clean web applications with intuitive
        functionalities. I enjoy the process of turning ideas into reality using creative solutions. I’m always
        curious about
        learning new skills, tools, and concepts. In addition to working on various solo full stack projects, I have
        worked with
        creative teams, which involves daily stand-ups and communications, source control, and project management.
      </p>

      <div className="btn-group">
        <button className="btn btn-secondary">Hire me</button>

        <button className="btn btn-primary">Download cv</button>
      </div>

    </div>

    

  </section>
  </article>

  
  )
}
