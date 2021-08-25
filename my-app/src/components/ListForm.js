
const ListForm = (props) => {

    //to trigger delete when user click X
    const deleteListHandler = () => {
        props.deleteList(props.displayList.id);
    }

    return (
        <li key={props.displayList.id}>
            {props.displayList.value}
            <button type="button" onClick={deleteListHandler}>X</button>
        </li>
    );
};

export default ListForm;