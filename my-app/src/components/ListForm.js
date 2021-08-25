
const ListForm = (props) => {
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