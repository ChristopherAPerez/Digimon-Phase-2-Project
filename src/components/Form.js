import React, { useState } from 'react';

function Form( { newDigimon, setNewDigimon } ){

    const [textInput, setTextInput] = useState("")
    const [imgInput, setImgInput] = useState("")
    const [levelInput, setLevelInput] = useState("")

    const addDigi = {
        name: textInput,
        img:imgInput,
        level: levelInput
    }

    function handleName(e){
        setTextInput(e.target.value)
    }

    function handleImage(e){
        setImgInput(e.target.value)
    }

    function handleChange(e){
        setLevelInput(e.target.value)
    }

    function handleSubmit(e){

        e.preventDefault()

        fetch(`http://localhost:8000/New`, {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(addDigi),
        })
        .then((r) => r.json())
        .then((data) => setNewDigimon([...newDigimon, data]))
        
    }

    return (
        <div className="Form">
            <form onSubmit={handleSubmit}>
                <input name="name" placeholder='name...' value={textInput} onChange={handleName}/>
                <input name="img" placeholder='img_URL...' value={imgInput} onChange={handleImage}/>
                <select onChange={handleChange}>
                    <option value=""></option>
                    <option value="Fresh">Fresh</option>
                    <option value="In Training">In Training</option>
                    <option value="Rookie">Rookie</option>
                    <option value="Champion">Champion</option>
                    <option value="Ultimate">Ultimate</option>
                    <option value="Mega">Mega</option>
                </select>
                <button>Add New Digimon!</button>
            </form>
            <div className="tryIt">
                <h1>Give it a try:</h1>
                <p>
                Name: Corgimon<br/>
                Image_URL: https://static.inspiremore.com/wp-content/uploads/2020/07/15120638/Gen-the-Corgi-with-funny-face-2.png<br/>
                Level: Mega
                </p>
            </div>
        </div>
    )
}

export default Form;