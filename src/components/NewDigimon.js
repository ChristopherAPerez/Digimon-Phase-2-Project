import React from 'react';

function NewDigimon( { digimon, onDeleteDigimon } ){

    function handleClick(){
        fetch(`http://localhost:8000/New/${digimon.id}`, {
            method: "DELETE",
          })
            .then((r) => r.json())
            .then(() => onDeleteDigimon(digimon));
    }

    return (
        <div className="newCard" onClick={handleClick}>
            <p>{digimon.name}</p>
            <img width="165px" src={digimon.img} alt={digimon.name}/>
        </div>
    );

}

export default NewDigimon;