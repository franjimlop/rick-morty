import React from 'react';
import './Personaje.css';
import Status from './Status/Status';
import PropTypes from 'prop-types';

const Personaje = ({objeto}) => {
  let mostrar;
  if(objeto){
       let { name, image, location, status} = objeto;
       
       return(
        <>
          <div className="card p-3 border border-light mb-4">
              <Status estado={status}/>
            <img src={image} alt="" className='img-fluid rounded-start rounded border border-light'/>
            <div className="card-body">
              <h3 className="card-title">{name}</h3>
              <h6 className="card-text">Ultima vez visto:</h6>
              <p className="card-text">{location.name}</p>
              
            </div>
            
          </div>
        </>
       );
  }else{
    mostrar = "Error al cargar el personaje";
  }
  return (
    //Contenido del Card
    //4 Card por línea
    <>{mostrar}</>
  )
}

// Definimos los tipos de datos de las props
Personaje.propTypes = {
    objeto: PropTypes.object.isRequired,
};
// valor por defecto de la prop no es obligatorio con el required
export default Personaje;