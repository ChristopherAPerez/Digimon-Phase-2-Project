import React from 'react';

function TeamMate( { digimon, onDeleteDigimon } ){

    function handleClick(){
        fetch(`http://localhost:8000/digimon/${digimon.id}`, {
            method: "DELETE",
          })
            .then((r) => r.json())
            .then(() => onDeleteDigimon(digimon));
    }

    return (
        <div className="teamCard" onClick={handleClick}>
            <p>{digimon.name}</p>
            <img width="165px" src={digimon.img} alt={digimon.name}/>
        </div>
    );

}

export default TeamMate;