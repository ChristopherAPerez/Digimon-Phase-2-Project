import React, { useState } from 'react';

function Form( { newDigi, setNewDigi } ){

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
        .then((newDigimon) => setNewDigi([...newDigi, newDigimon]))

        
    }