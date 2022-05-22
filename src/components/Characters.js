import React from 'react';

export const Characters = ({characters = []}) => {
  return (
    <div className="row">
      
      {
      characters.map((item, index) => (
        <div key={index} className="col">
          <div className="card mt-5 shadow border-0" style={{minWidth: "300px"}}>
            <img src={item.image} className="card-img-top" alt="img"/>
            <div className="card-body">
              <h5 className="card-title text-center"><b>{item.name}</b></h5>
              <p className="card-text"><b>Specie: </b>{item.species}</p>
              <p className="card-text"><b>Gender: </b>{item.gender}</p>
              <p className="card-text"><b>Location: </b>{item.location.name}</p>
              <p className="card-text"><b>Type: </b>{item.type ? (item.type) : 'None'}</p>
            </div>
          </div>
        </div>
      ))
      }
    </div>
  )
}

export default Characters;
