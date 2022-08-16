import React, { useState } from 'react';

function Sort( { setSearch, setLevel } ) {

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