import React, { useState } from "react"

export const Navbar = () => {
  
 const [selectLanguaje, setSelectLanguaje] = useState('en');

 const handleLanguageChange = (event) => {
  setSelectLanguaje(event.target.value);
};
  return (
      <header className="header"  data-header >
      <div className="container">

        <h1 className="h1 logo">
          <a href="#">Katherine<span>.</span></a>
        </h1>

        <div className="navbar-actions">

          <select name="language" id="lang" value={selectLanguaje} onChange={handleLanguageChange}>
            <option value="es">Es</option>
            <option value="ar">En</option>
          </select>

          <button className="theme-btn" aria-label="Change Theme" title="Change Theme" data-theme-btn>
            <span className="icon"></span>
          </button>

        </div>

        <button className="nav-toggle-btn" aria-label="Toggle Menu" title="Toggle Menu" data-nav-toggle-btn>
          <span className="one"></span>
          <span className="two"></span>
          <span className="three"></span>
        </button>

        <nav className="navbar" data-navbar>
          <ul className="navbar-list">

          <li>
                <a href="#inicio" className="navbar-link">Inicio</a>
              </li>

              <li>
                <a href="#acerca" className="navbar-link">Acerca</a>
              </li>

              <li>
                <a href="#habilidades" className="navbar-link">Habilidades</a>
              </li>

              <li>
                <a href="#portafolio" className="navbar-link">Portafolio</a>
              </li>

              <li>
                <a href="#educacion" className="navbar-link">Educación</a>
              </li>

              <li>
                <a href="#contact" className="navbar-link">Contacto</a>
              </li>
          </ul>
        </nav>
      </div>
    </header> 
  )
}
