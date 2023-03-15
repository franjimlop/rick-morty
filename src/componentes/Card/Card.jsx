import React from 'react';
import './Card.css';
import Personaje from './Personaje/Personaje';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


// const Card = ({results, pagina}) => {
//   let mostrar;
//   if(results){
//     mostrar = results.map((personaje)=>{
//        return(
//         <Link to={`${pagina}/${personaje.id}`} key={personaje.id} className="col-3">
//           <Personaje objeto={personaje} />
//         </Link>
//        );
//     })
//   }else{
//     mostrar = "no se ha obtenido resultados";
//   }
//   return (
//     //Contenido del Card
//     //4 Card por línea
//     <>{mostrar}</>
//   )
// }

const Card = ({results}) => {
  let mostrar;
  if(results){
    mostrar = results.map((personaje)=>{
       return(
        <Link to={`/${personaje.id}`} key={personaje.id} className="col-3">
          <Personaje objeto={personaje} />
        </Link>
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
  results: PropTypes.array.isRequired,
  pagina: PropTypes.string.isRequired
};
// valor por defecto de la prop no es obligatorio con el required
export default Card;