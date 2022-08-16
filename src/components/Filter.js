import React, { useState } from 'react';

function Filter( { setSearch, setLevel } ) {

    const [input, setInput] = useState("")

    function handleText(e){
        e.preventDefault()

        console.log(e.target.value)

        setInput(e.target.value)
        setSearch(e.target.value)
    }

    function handleChange(e){

        setLevel(e.target.value)
        
    }

    return (
        <div className="sort">
            <h1>Explore and Build Your Team</h1>
            <input type={"text"} placeholder={"Search..."} value={input} onChange={handleText} />
            <select onChange={handleChange}>
                <option value="All">All</option>
                <option value="Fresh">Fresh</option>
                <option value="In Training">In Training</option>
                <option value="Rookie">Rookie</option>
                <option value="Champion">Champion</option>
                <option value="Ultimate">Ultimate</option>
                <option value="Mega">Mega</option>
            </select>
        </div>
    );
}

export default Filter;