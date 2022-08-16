import React from 'react';

function Digimon( { digimon, team, setTeam } ){

    function handleClick(){

        const newDigimon = {
            "name" : digimon.name,
            "img" : digimon.img,
            "level" : digimon.level
        }

        if(team.length >= 6){
            return alert("Limit Reached!")
        } else {
            fetch(`http://localhost:8000/Digimon`, {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(newDigimon),
        })
        .then((r) => r.json())
        .then((newDigimon) => setTeam([...team, newDigimon]))
        }
    }

    return (
        <div className="digimon" onClick={handleClick}>
            <p className='name'>{digimon.name}</p>
            <img width="165px" src={digimon.img} alt={digimon.name}/>
        </div>
    );

}

export default Digimon;