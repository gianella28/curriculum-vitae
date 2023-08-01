import React from 'react';

export const Inicio = () => {
  return (
    <article className="container">
      <section className="hero" id="inicio">
        <figure className="hero-banner">
          <picture>
            <source srcSet="./src/assets/images/hero-banner.png" media="(min-width: 768px)" />
            <source srcSet="./src/assets/images/hero-banner-md.png" media="(min-width: 500px)" />
            <img src="./src/assets/images/hero-banner-sm.png" alt="A man in a blue shirt with a happy expression" className="w-100" />
          </picture>
        </figure>
        <div className="hero-content">
          <h2 className="h2 hero-title">Desarrolladora web en React</h2>
          <a href="#contacto" className="btn btn-primary">Ponerse en Contacto</a>
        </div>
        <ul className="hero-social-list">
          <li>
            <a href="https://www.facebook.com/gianella.ramirez.395" className="hero-social-link">
              <ion-icon name="logo-facebook"></ion-icon>
              <div className="tooltip">Facebook</div>
            </a>
          </li>
          <li>
            <a href="https://github.com/gianella28" className="hero-social-link">
              <ion-icon name="logo-github"></ion-icon>
              <div className="tooltip">Github</div>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/👩‍💻-katherine-ramirez-553b3620b" className="hero-social-link">
              <ion-icon name='logo-linkedin'/>
              <div className="tooltip">Linkedin</div>
            </a>
          </li>
        </ul>
        <a href="#stats" className="scroll-down">Scroll</a>
      </section>
    </article>
  );
}
