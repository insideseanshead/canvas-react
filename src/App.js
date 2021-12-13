import {useState, useEffect, useRef } from 'react'
import Canvas from "./components/Canvas";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Slider from './components/Slider';

function App() {
  // Set State
  const [penSlider, setPenSlider] = useState({
    min:0,
    max:20,
    value: 10,
  })

  const [sliderValue, setSliderValue] = useState(0)

  return (
    <div className="App">
      <Slider penSlider={penSlider} value={sliderValue} />
      <Canvas />

    </div>
  );
}

export default App;
