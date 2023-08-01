import { useEffect } from "react"
import { Acerca, Contacto, Educacion, Footer, Habilidades, Inicio, Navbar, Portafolio } from "../components"


export const AppRouter = () => {
  useEffect(() => {
    // Comprobar si el script ya se ha cargado
    if (!window.scriptLoaded) {
      // Marcar el script como cargado para evitar duplicados
      window.scriptLoaded = true;

      // Crear el elemento script solo si aún no se ha cargado
      const scriptElement = document.createElement("script");
      scriptElement.src = "src/assets/js/script.js"; // Ajusta la ruta si es necesario
      document.body.appendChild(scriptElement);
    }

    // Limpieza al desmontar el componente (opcional)
    return () => {
      // No es necesario eliminar el script aquí, ya que queremos que se cargue nuevamente si el componente se monta otra vez.
    };
  }, []);

  return (
      <>
        <Navbar />
        <Inicio />
        <Acerca />
        <Habilidades />
        <Portafolio />
        <Educacion />
        <Contacto />
        <Footer />

        {/* Botón Flotante */}
        <a href="#top" className="go-top" data-go-top title="Go to Top">
        <ion-icon name="arrow-up"></ion-icon>
        </a>
      </>   
    )
};




/*
export const AppRouter = () => {
  useEffect(() => {
    //Crear el elemento script
    const scriptElement = document.createElement('script');
    scriptElement.src = 'src/assets/js/script.js'; // Ajusta la ruta según la ubicación de tu archivo script.js

    // Agregar el elemento script al final del body
    document.body.appendChild(scriptElement);

    // Limpieza al desmontar el componente (opcional)
    return () => {
      document.body.removeChild(scriptElement);
    };

    /*if (!window.elemToggleFunc) {
      const scriptElement = document.createElement("script");
      scriptElement.src = "src/assets/js/script.js";
      document.body.appendChild(scriptElement);
    }

    // Limpieza al desmontar el componente (opcional)
    return () => {
      // No es necesario eliminar el script aquí, ya que queremos que se cargue nuevamente si el componente se monta otra vez.
    };
  */
  
  // return (
  //   <>
  //     <Navbar />
  //     <Inicio />
  //     <Acerca />
  //     <Habilidades />
  //     <Portafolio />
  //     <Educacion />
  //     <Contacto />
  //     <Footer />
  //   </>   
  // )
  
  
/*/}*/


