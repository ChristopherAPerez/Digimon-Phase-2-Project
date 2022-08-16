import React, { useState } from 'react';
import Team from "./DigiTeam.js"

function RateMyTeam( { team } ){

    const [scale, setScale] = useState(0)
    const [comment, setComment] = useState("")

    function handleClick(){

        setScale(0)

        const teamLevel = digiTeam.map((digimon) => {
            if(digimon.level === "Fresh"){
                return 1
            } else if(digimon.level === "In Training"){
                return 2
            } else if(digimon.level === "Rookie"){
                return 3
            } else if(digimon.level === "Champion"){
                return 4
            } else if(digimon.level === "Ultimate"){
                return 5
            } else if(digimon.level === "Mega"){
                return 6
            } else {
                return 7
            }
        })

        const total = teamLevel.reduce((a, b) => a + b, 0)

        setScale(total)

        if(total <= 6){
            setComment("Cute")
        } else if(total >= 7 && total <= 12){
            setComment("Needs Work")
        }  else if(total >= 13 && total <= 18){
            setComment("Weak")
        }  else if(total >= 19 && total <= 24){
            setComment("Average")
        }  else if(total >= 25 && total <= 30){
            setComment("Strong")
        }  else {
            setComment("Strongest")
        }

    }
