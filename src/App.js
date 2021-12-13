import {useState, useEffect, useRef } from 'react'
import Canvas from "./components/Canvas";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Controls from "./components/Controls";
import context from 'react-bootstrap/esm/AccordionContext';

function App() {
  

  return (
    <div className="App">
      <Canvas />
    </div>
  );
}

export default App;
