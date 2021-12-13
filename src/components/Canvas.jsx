import { useRef, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";

const Canvas = ({props, color, penSize}) => {
  const canvasRef = useRef(null);
  // Drawing functions
  const draw = (ctx) => {
    const canvas = document.getElementById("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight/1.5;
    let drawing = false;

    // Buttons
    const clear = document.getElementById("clear");

    const saveImage = document.getElementById("save");

    const startDrawing = (e) => {
      drawing = true;
      drawLine(e);
    };

    const endDrawing = (e) => {
      drawing = false;
      ctx.beginPath();
    };

    const drawLine = (e) => {
      if (!drawing) return;
      ctx.lineWidth = 10;
      ctx.lineCap = "round";
      ctx.strokeStyle = {color}
      ctx.lineTo(e.clientX, e.clientY);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(e.clientX, e.clientY);
    };

    // Clear Canvas
    const clearCanvas = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    };

    // Save Canvas
    const saveCanvas = () => {
        //Use toBlob to save file as png
        canvas.toBlob(function(blob) {
            const image = document.createElement('a')
            const url = URL.createObjectURL(blob)
            image.href = url;
            image.download = 'canvas drawing.png'
            document.body.appendChild(image)
            image.click()
            document.body.removeChild(image)
            URL.revokeObjectURL(url)
        }) 
    }

    // Event Listeners
    canvas.addEventListener("mousedown", startDrawing);
    canvas.addEventListener("mouseup", endDrawing);
    canvas.addEventListener("mousemove", drawLine);

    clear.addEventListener("click", clearCanvas);

    saveImage.addEventListener("click", saveCanvas)
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    draw(context);
  }, [draw]);

  return (
    <div className="canvasDiv">
      <canvas ref={canvasRef} {...props} id="canvas" />;
      <Button className='canvasButtons' variant="primary" id="save">
        Save
      </Button>
      <Button className='canvasButtons' variant="danger" id="clear">
        Delete
      </Button>
    </div>
  );
};

export default Canvas;
