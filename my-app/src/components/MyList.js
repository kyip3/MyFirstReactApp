import ListForm from "./ListForm";

const MyList = (props) => {

    const deleteHandler = (id) => {
        props.deleteList(id);
    }
    const myList = props.displayList.map(item => (
        <ListForm key={item.id} displayList={item} deleteList={deleteHandler}></ListForm>
    ));

    return (
        <ul>
            <h3>{myList}</h3>
        </ul>
    );
};

export default MyList;