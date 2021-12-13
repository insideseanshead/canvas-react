import FormRange from "react-bootstrap/esm/FormRange"

const PenSlider = ({penSize}) => {
    return (
        <div>
            <FormRange type="range" class="form-range" min='1' max='10' id="customRange3" />
        </div>
    )
}

export default PenSlider
