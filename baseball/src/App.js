import React, { useState } from "react";
import "./App.css";
import Display from "./components/Display";
import Dashboard from "./components/Dashboard";

function App() {
  const [balls, Setballs] = useState(0);
  const [strikes, Setstrikes] = useState(0);
  // const [Hits,SetHits] = useState(``)
  // const [out,SetOuts] = useState(``)

  const hit = () => {
    Setstrikes(0);
    Setballs(0);
  };

  const strike = () =>
    strikes < 2 ? Setstrikes(strikes + 1) : Setstrikes(0) & Setballs(0);

  const foul = () => {
    if (strikes < 2) {
      Setstrikes(strikes + 1);
    } else {
      return null;
    }
  };

  const ball = () => {
    if (balls < 3) {
      Setballs(balls + 1);
    } else {
      Setstrikes(0);
      Setballs(0);
    }
  };

  return (
    <div className='App'>
      <h1>BaseBall</h1>
      <Display balls={balls} strikes={strikes} />
      <Dashboard hit={hit} strike={strike} foul={foul} ball={ball} />
    </div>
  );
}

export default App;
