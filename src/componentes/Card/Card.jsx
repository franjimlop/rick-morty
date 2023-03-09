import React from 'react'

const Card = ({results}) => {
  let mostrar;
  console.log(results);
  if(results){
    mostrar = results.map((personaje)=>{
       let { id, name, image, location, status} = personaje;
       return(
        <div key={id} className="col-3">
          <div className="card p-3 border border-dark mb-4">
            <img src={image} alt="" className='img-fluid rounded-start rounded border border-dark'/>
            <div class="card-body">
              <h3 class="card-title">{name}</h3>
              <h6 class="card-text">Ultima vez visto:</h6>
              <p className="card-text">{location.name}</p>
              <p>{status}</p>
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