import React, { useState, useEffect } from 'react';
import './Card.css'
const Card = ({results}) => {
  let mostrar;
  let [classStatus,setClassStatus] = useState("desconocido");
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
            <div class="card-body">
              <h3 class="card-title">{name}</h3>
              <h6 class="card-text">Ultima vez visto:</h6>
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

export default Card;