import { useState } from "react";

const AddList = (props) => {

    const [myValue, setMyValue] = useState("");

    const addListHandler = (event) => {
        event.preventDefault();
        props.onAddList({ id: Math.floor(Math.random() * 100), value: myValue });
    }

    const onChangeHandler = (event) => {
        setMyValue(event.target.value);
    }

    return (
        <form onSubmit={addListHandler}>
            <input value={myValue} onChange={onChangeHandler}></input>
            <button type="submit">Add</button>
        </form>);
};

export default AddList;