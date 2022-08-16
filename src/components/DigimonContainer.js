import React from 'react';
import Digimon from "./Digimon.js"

function DigimonContainer( { digimons, team, setTeam } ){

console.log(digimons)

    return (
        <div className="contain">
            {digimons.map((digimon) => {
                return <Digimon key={digimon.name} digimon={digimon} team={team} setTeam={setTeam} />
            })}
        </div>
    )
}

export default DigimonContainer;