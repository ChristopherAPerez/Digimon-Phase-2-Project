import React from 'react';
import TeamMate from "./TeamMate"

function TeamContainer( { team, setTeam } ){

    function onDeleteDigimon(deletedDigimon) {
        const updatedTeam = team.filter((digimon) => digimon.id !== deletedDigimon.id);
        setTeam(updatedTeam);
      }

    return (
        <div className='team'>
            <h1 className='build'>Digimon Team!</h1>
            <ul className="ul">
            {team.map((digimon) => {
                return <TeamMate key={digimon.id} digimon={digimon} onDeleteDigimon={onDeleteDigimon} />
            })}
            </ul>
        </div>
    )
}

export default TeamContainer;