import React from 'react';
import './Card.css'
import PropTypes from 'prop-types';

const Card = ({results}) => {
  let mostrar;
  console.log(results);
  if(results){
    mostrar = results.map((personaje)=>{
       let { id, name, image, location, status} = personaje;
       let classStatus;
       switch(status){
         case "Dead":
           classStatus="muerto";
           break;
         case "Alive":
           classStatus="vivo";
           break;
         default:
           classStatus="desconocido";
           break;
       }
       /*
       useEffect(() => {
          setClassStatus(status)
      }, [personaje])
      */
       return(
        <div key={id} className="col-3">
          <div className="card p-3 border border-light mb-4">
              <p className={classStatus+" estado centrar"}>{status}</p>
            <img src={image} alt="" className='img-fluid rounded-start rounded border border-light'/>
            <div className="card-body">
              <h3 className="card-title">{name}</h3>
              <h6 className="card-text">Ultima vez visto:</h6>
              <p className="card-text">{location.name}</p>
              
            </div>
            
          </div>
        </div>
       );
    })
  }else{
    mostrar = "no se ha obtenido resultados";
  }
  return (
    //Contenido del Card
    //4 Card por línea
    <>{mostrar}</>
  )
}

// Definimos los tipos de datos de las props
Card.propTypes = {
  results: PropTypes.object.isRequired,
};
// valor por defecto de la prop no es obligatorio con el required
export default Card;