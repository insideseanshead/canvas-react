import FormRange from "react-bootstrap/esm/FormRange";

const PenSlider = ({ slider }) => {
  return (
    <div>
      <FormRange className='slider'
        type="range"
        class="form-range"
        min='1'
        max='10'
        default='5'
        value={slider.value}
  
        id="customRange3"
      />
    </div>
  );
};

export default PenSlider;
