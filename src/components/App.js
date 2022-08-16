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

  const [team, setTeam] = useState([])

  const [filter, setFilter] = useState("")

  const [level, setLevel] = useState("All")

  const [newDigimon, setNewDigimon] = useState([])

  const [page, setPage] = useState("/")

  console.log(page)

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
    .then((data) => setNewDigimon(data))
  }, [])

  const filteredSearch = digimons.filter((digimon) => {
    return digimon.name.toLowerCase().includes(filter.toLowerCase())
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
          <NavBar onChangePage={setPage} />
            <Switch>
                <Route path="/RateMyTeam">
                <RateMyTeam team={team}/>
                </Route>
                <Route path="/DigimonContainer">
                <TeamContainer team={team} setTeam={setTeam}/>
                <Filter setFilter={setFilter} setLevel={setLevel}/>
                <DigimonContainer digimons={filteredLevel} team={team} setTeam={setTeam} />
                </Route>
                <Route path="/Form">
                <Form newDigimon={newDigimon} setNewDigimon={setNewDigimon} />
                <NewDigimonContainer newDigimon={newDigimon} setNewDigimon={setNewDigimon}/>
                </Route>
                <Route exact path="/">
                <Header />
                </Route>
                <Route path="*">
                    <h1>404 not found</h1>
                </Route>
            </Switch>
    </div>
  );
}

export default App;
