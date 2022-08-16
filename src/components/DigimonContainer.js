import React from 'react';
import Digimon from "./Digimon.js"

function DigimonContainer( { digimons, team, setTeam } ){

    return (
        <div className="contain">
            <ul>
            {digimons.map((digimon) => {
                return <Digimon key={digimon.name} digimon={digimon} team={team} setTeam={setTeam} />
            })}
            </ul>
        </div>
    )
}

export default DigimonContainer;