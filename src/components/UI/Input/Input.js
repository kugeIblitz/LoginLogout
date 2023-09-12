import classes from "../../Login/Login.module.css";

function Input(props) {
  return (
    <div
      className={`${classes.control} ${
        props.state.isValid === false ? classes.invalid : ""
      }`}>
      <label htmlFor={props.name}>{props.text}</label>
      <input
        type={props.name}
        id={props.name}
        value={props.state.value}
        onChange={props.changeHandler}
        onBlur={props.validationHandler}
      />
    </div>
  );
}
export default Input;
