

export const Portafolio = () => {
  return (
    <article className='container'>
    <section className="project" id="portafolio">

    <ul className="project-list">

      <li>
        <div className="project-content section-content">

          <p className="section-subtitle">Mis trabajos</p>

          <h2 className="h3 section-title">¡Explore mi portafolio y prepárese para sorprenderse!</h2>

          <p className="section-text">
           
          </p>

        </div>
      </li>

      <li>
        <a href="https://gianella28.github.io/react-gif-expert/" className="project-card">

          <figure className="card-banner">
            <img src="./src/assets/images/gifExpert.png" className="w-100" alt="A macintosh on a yellow background."/>
          </figure>

          <div className="card-content">
            <h3 className="h4 card-title">GifExpert App</h3>
            <h2 className="publish-date">React, JavaScritp, Html, Css</h2>
          </div>

        </a>
      </li>

      <li>
        <a href="#" className="project-card">

          <figure className="card-banner">
            <img src="./assets/images/project-2.png" className="w-100" alt="On a Blue background, a Wacom and a mouse."/>
          </figure>

          <div className="card-content">
            <h3 className="h4 card-title">Lorem Ipsum Dolor 02</h3>

            <time className="publish-date" dateTime="2022-04">April 2022</time>
          </div>

        </a>
      </li>

      <li>
        <a href="#" className="project-card">

          <figure className="card-banner">
            <img src="./assets/images/project-3.png" className="w-100"
              alt="A Cassette tape on a mellow apricot background."/>
          </figure>

          <div className="card-content">
            <h3 className="h4 card-title">Lorem Ipsum Dolor 03</h3>

            <time className="publish-date" dateTime="2022-04">April 2022</time>
          </div>

        </a>
      </li>

      <li>
        <a href="#" className="project-card">

          <figure className="card-banner">
            <img src="./assets/images/project-4.png" className="w-100"
              alt="Blue digital watch on a dark liver background."/>
          </figure>

          <div className="card-content">
            <h3 className="h4 card-title">Lorem Ipsum Dolor 04</h3>

            <time className="publish-date" dateTime="2022-04">April 2022</time>
          </div>

        </a>
      </li>

      <li>
        <a href="#" className="project-card">

          <figure className="card-banner">
            <img src="./assets/images/project-5.png" className="w-100"
              alt="On a dark liver background, Airport luggage car carrying a luggage."/>
          </figure>

          <div className="card-content">
            <h3 className="h4 card-title">Lorem Ipsum Dolor 05</h3>

            <time className="publish-date" dateTime="2022-04">April 2022</time>
          </div>

        </a>
      </li>

      <li>
        <a href="#" className="project-card">

          <figure className="card-banner">
            <img src="./assets/images/project-6.png" className="w-100"
              alt="On a yellow background, a digital watch and a glass."/>
          </figure>

          <div className="card-content">
            <h3 className="h4 card-title">Lorem Ipsum Dolor 06</h3>

            <time className="publish-date" dateTime="2022-04">April 2022</time>
          </div>

        </a>
      </li>

      <li>
        <a href="#" className="project-card">

          <figure className="card-banner">
            <img src="./assets/images/project-7.png" className="w-100"
              alt="A fujifilm instant camera on a dark electric blue background."/>
          </figure>

          <div className="card-content">
            <h3 className="h4 card-title">Lorem Ipsum Dolor 07</h3>

            <time className="publish-date" dateTime="2022-04">April 2022</time>
          </div>

        </a>
      </li>

      <li>
        <button className="load-more">Load more work</button>
      </li>

    </ul>

  </section>
  </article>
  )
}
