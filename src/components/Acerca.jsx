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

      <h2 className="h3 section-title">¿Necesita un producto creativo? ¡Puedo ayudarle!</h2>

      <p className="section-text">
      Hola, soy Katherine Ramirez, una desarrolladora apasionada por crear aplicaciones web limpias y funcionales. 
      Mi enfoque es convertir ideas en soluciones creativas y eficientes. Me especializo en el desarrollo en React
      y me apasiona construir interfaces interactivas. Mantengo una curiosidad constante por aprender nuevas habilidades
      y estar al día en un entorno tecnológico en evolución. He trabajado en proyectos full stack en solitario y 
      colaborado con equipos creativos, lo que incluye stand-ups, comunicación diaria, control de versiones y gestión de proyectos. 
      ¡Estoy emocionada por seguir explorando y contribuyendo al emocionante mundo del desarrollo web!
      </p>

      <div className="btn-group">
        <button className="btn btn-secondary">Hire me</button>

        <button className="btn btn-primary">Descargar cv</button>
      </div>

    </div>
  </section>
  </article>
  )
}
