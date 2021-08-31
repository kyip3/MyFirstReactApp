import ListForm from "./ListForm";
import classes from "./ListForm.module.css"

const MyList = (props) => {

    const deleteHandler = (id) => {
        props.deleteList(id);
    }
    const myList = props.displayList.map(item => (
        <ListForm key={item.id} displayList={item} deleteList={deleteHandler}></ListForm>
    ));

    return (
        <ul className={classes.listRow}>
            <div>{myList}</div>
        </ul>
    );
};

export default MyList;