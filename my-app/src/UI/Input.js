import classes from "./Input.module.css"

const Input = (props) => {
    return (
        <div>
            <input {...props.input}></input>
        </div>);
};

export default Input;