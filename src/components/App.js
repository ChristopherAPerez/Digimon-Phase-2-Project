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

  return (
    <div>

    </div>
  );
}

export default App;
