import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import AddList from './components/AddList';
import MyList from './components/MyList';

function App() {
  const todoListing = [{ id: 1, value: "My First Task" }];

  const [currentList, setCurrentList] = useState(todoListing)

  const addListHandler = (newList) => {
    setCurrentList((prevList) => {
      return [newList, ...prevList];
    });
  }

  const deleteListHandler = (id) => {
    const newList = currentList.filter((item) => {
      return item.id !== id;
    });
    setCurrentList(newList);
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Todo list
        </p>
        <AddList onAddList={addListHandler}></AddList>
        <MyList displayList={currentList} deleteList={deleteListHandler}></MyList>
      </header>
    </div>
  );
}

export default App;
