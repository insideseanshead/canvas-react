import FormRange from "react-bootstrap/esm/FormRange"
import Button from 'react-bootstrap/Button'

const Controls = (handleClear) => {


    return (
        <div className='controls'>
            <FormRange className='pen-slider' />
            <Button variant='primary'>Save</Button>
            <Button onClick={() => handleClear()} variant='danger'>Delete</Button>
        </div>
    )
}

export default Controls
