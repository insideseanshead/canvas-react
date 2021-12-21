import { useState, useEffect } from "react";
import { ChromePicker } from "react-color";
import Canvas from "./components/Canvas";
import PenSlider from "./components/PenSlider";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [penSize, setPenSize] = useState(5);
  const [color, setColor] = useState("red");

  // Changing pensize state
  const changePen = (newValue => {
    setPenSize(newValue)
  })


  return (
    <div className="App">
      <Canvas color={color} penSize={penSize} />
      <PenSlider slider={penSize} setPenSize={setPenSize} />
      <ChromePicker
        className="colorPicker"
        color={color}
        onChange={(update) => setColor(update.hex)}
      />
    </div>
  );
}

export default App;
