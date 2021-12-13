import {useState} from "react";
import Canvas from "./components/Canvas";
import "bootstrap/dist/css/bootstrap.min.css";
import {ChromePicker} from 'react-color'
import PenSlider from "./components/PenSlider";
import "./App.css";



function App() {
  const [penSize, setPenSize] = useState(5)
  const [color, setColor] = useState('red')

 
  return (
    <div className="App">
      <PenSlider slider={penSize} />
      <Canvas color={color} penSize={penSize} />
      <ChromePicker color={color} onChange={update => setColor(update.hex)} />
    </div>
  );
}

export default App;
