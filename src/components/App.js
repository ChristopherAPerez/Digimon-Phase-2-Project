import React, { useState, useEffect } from 'react';
import Header from "./Header.js"
import DigimonContainer from './DigimonContainer.js'
import TeamContainer from './TeamContainer.js'
import Filter from "./Filter.js"
import RateMyTeam from "./RateMyTeam.js"
import Form from "./Form.js"
import NewDigimonContainer from "./NewDigimonContainer.js"
import NavBar from "./NavBar.js"
import './App.css';
import { Switch, Route } from "react-router-dom";

function App() {

  const [digimons, setDigimon] = useState([])

  const [Team, setTeam] = useState([])

  const [Filter, setFilter] = useState("")

  const [level, setLevel] = useState("All")

  const [new, setNew] = useState([])

  const [page, setPage] = useState("/")

  useEffect(() => {
    fetch(`https://digimon-api.vercel.app/api/digimon`)
    .then((r) => r.json())
    .then((data) => setDigimon(data))
  }, [])
  
  useEffect(() => {
    fetch(`http://localhost:8000/Digimon`)
    .then((r) => r.json())
    .then((data) => setTeam(data))
  }, [])

  useEffect(() => {
    fetch(`http://localhost:8000/New`)
    .then((r) => r.json())
    .then((data) => setNew(data))
  }, [])

  const filteredSearch = digimons.filter((digimon) => {
    return digimon.name.toLowerCase().includes(search.toLowerCase())
  })

  const filteredLevel = filteredSearch.filter((digimon) => {
    if(level === "All"){
      return true
    } else{
      return digimon.level === level
    }
  })

  return (
    <div>

    </div>
  );
}

export default App;
