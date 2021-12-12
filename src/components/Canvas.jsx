import { useRef, useEffect } from "react";
import context from "react-bootstrap/esm/AccordionContext";

const Canvas = (props) => {
  const canvasRef = useRef(null);
  // Drawing functions
  const draw = (ctx) => {
    const canvas = document.getElementById('canvas')
    let drawing = false;

    const startDrawing = (e) => {
      drawing = true;
      drawLine(e);
    };

    const endDrawing = (e) => {
      drawing = false;
      ctx.beginPath()
    };

    const drawLine = (e) => {
        if(!drawing) return;
        ctx.lineWidth = 10;
        ctx.lineCap = 'round';

        ctx.lineTo(e.clientX, e.clientY);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(e.clientX, e.clientY)
    };

    // Event Listeners
    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mouseup', endDrawing);
    canvas.addEventListener('mousemove', drawLine);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    draw(context);
  }, [draw]);

  return (
    <canvas ref={canvasRef} {...props} id="canvas" width="800" height="600" />
  );
};

export default Canvas;
