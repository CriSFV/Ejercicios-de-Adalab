const InputGroupText = (props) => {
  const handleInputName = (ev) => {
    props.handleChange(ev.target.value);
  };
  return (
    <div className='input-group-text'>
      <label className='label-text' htmlFor='name'>
        {props.labelText}
      </label>
      <input
        className={props.className} // ClassName y type se suele poner directamente
        type={props.type}
        name={props.inputName}
        id={props.inputId}
        placeholder={props.inputPlaceholder}
        value={props.inputValue}
        onChange={handleInputName}
      />
    </div>
  );
};
export default InputGroupText;
