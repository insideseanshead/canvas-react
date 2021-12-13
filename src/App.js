import {useState} from "react";
import Canvas from "./components/Canvas";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Slider from "./components/PenSlider";
import PenSlider from "./components/PenSlider";

function App() {
  const [penSize, setPenSize] = useState({
    min:1,
    max:10,
  })
  return (
    <div className="App">
      <PenSlider slider={penSize} />
      <Canvas />
    </div>
  );
}

export default App;
