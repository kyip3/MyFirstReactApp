import { useState,useRef } from "react";
import classes from "./AddList.module.css";

const AddList = (props) => {

    //const [myValue, setMyValue] = useState("");

    //for input
    const listValueRef = useRef();

    //trigger when user click Add Task
    const addListHandler = (event) => {
        event.preventDefault();

        const myValue = listValueRef.current.value;
        console.log("list ref value is: ", myValue);

        if (myValue.trim().length === 0) {
            //do validation here
            return;
        }

        //using Math.random() to generate id, good enough for this app
        props.onAddList({ id: Math.floor(Math.random() * 1000), value: myValue });

        //reset text
        //setMyValue("");
        listValueRef.current.value = "";
    }

    //to update key entered on frontend
    // const onChangeHandler = (event) => {
    //     setMyValue(event.target.value);
    // }

    return (
        <form className={classes.addform} onSubmit={addListHandler}>
            <input ref={listValueRef} type="text"></input>
            <button type="submit">Add</button>
        </form>);
};

export default AddList;