import React, { useEffect, useState } from "react";
import { MdAdd } from "react-icons/md";
import "./todolist.css";
import List from "../component/List";

//localStorage to get data
const getItems = () => { 
  let list = JSON.parse(localStorage.getItem("Lists"));
  return list ? list : [];
}

const TodoList = () => {
  const [item, setItem] = useState("");
  const [listItem, setListItem] = useState(getItems);


  const InputEvent = (e) => {
    setItem(e.target.value);
  };

// Add list
  const addItem = () => {
    setListItem((curElem) => {
        const allItem = { id: new Date().getTime().toString(), item: item };
        return [...curElem, allItem];
    });
    setItem("");
  };


  //delete list
  const delItem = (index) => {
    setListItem((curElem) => {
      return curElem.filter((Elem) => {
        return Elem.id !== index;
      });
    });
  };



  //upload data to localStorage
  useEffect(() => {
    localStorage.setItem("Lists", JSON.stringify(listItem));
  },[listItem])


  return (
    <>
      <div className="container">
        <div className="content">
          <div className="headerDiv">
            <h1>ToDo-List</h1>
          </div>
          <div className="inputDiv">
            <input
              type="text"
              placeholder="Add item..."
              onChange={InputEvent}
              value={item}
            />
             <button onClick={addItem}><MdAdd /></button>   
          </div>

          <div className="listDiv">
            {listItem.map((currElem) => {
              return (
                <List text={currElem.item} key={currElem.id} id={currElem.id} onSelect={delItem} />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoList;
