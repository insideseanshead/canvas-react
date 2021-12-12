import FormRange from "react-bootstrap/esm/FormRange"
import Button from 'react-bootstrap/Button'

const Controls = () => {
    return (
        <div>
            <FormRange className='pen-slider' />
            <Button variant='primary'>Save</Button>
            <Button variant='danger'>Delete</Button>
        </div>
    )
}

export default Controls
