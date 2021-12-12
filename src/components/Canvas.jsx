import { useRef, useEffect } from 'react'
import context from 'react-bootstrap/esm/AccordionContext'

const Canvas = (props) => {
    const canvasRef = useRef(null)
    
    useEffect(() => {
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')
    }, [])
    return (
        <canvas ref={canvasRef} {...props} id='canvas' width='800' height='600' />
    )
}

export default Canvas
