import { classExpression } from "@babel/types";
import classes from "./ListForm.module.css"

const ListForm = (props) => {

    //to trigger delete when user click X
    const deleteListHandler = () => {
        props.deleteList(props.displayList.id);
    }

    return (
        <li key={props.displayList.id}>
            <div className={classes.listParent}>
                {props.displayList.value}
                <button className={classes.listRowButton} type="button" onClick={deleteListHandler}></button>
            </div>
        </li>
    );
};

export default ListForm;