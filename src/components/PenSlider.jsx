import FormRange from "react-bootstrap/esm/FormRange";

const PenSlider = (props) => {
  return (
    <div>
      <FormRange className='slider'
        type="range"
        class="form-range"
        min='1'
        max='10'
        default='5'
        value={props.slider.value}
        onChange={(e) => props.setPenSize(Number(e.target.value))}
        id="customRange3"
      />
    </div>
  );
};

export default PenSlider;
