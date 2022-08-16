import React from 'react';

function DigiTeam( { digimon } ){

    return (
        <div className='rateTeam'>
            <p>{digimon.name}</p>
            <img width="165px" src={digimon.img} alt={digimon.name}/>
        </div>
    );

}

export default DigiTeam;