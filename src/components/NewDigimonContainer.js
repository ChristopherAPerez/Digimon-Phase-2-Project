import React from 'react';
import NewDigimon from "./NewDigimon.js"

function NewDigimonContainer( { newDigimon, setNewDigimon } ){

    function onDeleteDigimon(deletedDigimon) {
        const updatedTeam = newDigimon.filter((digimon) => digimon.id !== deletedDigimon.id);
        setNewDigimon(updatedTeam);
      }

    return (
        <div >
            <h1 className="center">New Digimons!</h1>
            {newDigimon.map((digimon) => {
                return  (
                <NewDigimon key={digimon.id} digimon={digimon} onDeleteDigimon={onDeleteDigimon}/>
                )
            })}
        </div>
    )
}

export default NewDigimonContainer;