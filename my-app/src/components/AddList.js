import { useState } from "react";

const AddList = (props) => {

    const [myValue, setMyValue] = useState("");

    //trigger when user click Add Task
    const addListHandler = (event) => {
        event.preventDefault();

        if (myValue.trim().length === 0) {
            //do validation here
            return;
        }

        //using Math.random() to generate id, good enough for this app
        props.onAddList({ id: Math.floor(Math.random() * 1000), value: myValue });

        //reset text
        setMyValue("");
    }

    //to update key entered on frontend
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