import React from 'react';

function NewContainer( { newDigimon } ){

    return (
        <div >
            <h1 className="center">New Digimons!</h1>
            <ul className='new'>
                {newDigimon.map((digimon) => {
                return  (
                <div key={digimon.id}>
                    <p>{digimon.name}</p>
                    <img width="165px" src={digimon.img} alt={digimon.name}/>
                </div>
                )
            })}
            </ul>
            
        </div>
    )
}

export default NewContainer;