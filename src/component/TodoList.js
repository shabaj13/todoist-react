import React, { useEffect, useState } from "react";
import { MdAdd } from "react-icons/md";
import "./todolist.css";
import List from "../component/List";
import { BiEdit } from "react-icons/bi";

//localStorage to get data
const getItems = () => { 
  let list = JSON.parse(localStorage.getItem("Lists"));
  return list ? list : [];
}

const TodoList = () => {
  const [item, setItem] = useState("");
  const [listItem, setListItem] = useState(getItems);
  const [toggle, setToggle] = useState(true);
  const [itemEdit, setItemEdit] = useState(null);


  const InputEvent = (e) => {
    setItem(e.target.value);
  };

// Add list
  const addItem = () => {
    setListItem((curElem) => {
      if (!item) {

      } else if (item && !toggle) { 
        console.log(item);
        setListItem(
          listItem.map((elem) => {
            if (elem.id === itemEdit) {
              return {...elem, item:item}
            }
            return elem;
            
          })
          
        )
        
        setToggle(true);
        setItem("");
        setItemEdit(null);
      } else
      {
        const allItem = { id: new Date().getTime().toString(), item: item };
        return [...curElem, allItem];
      }
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

  //edit List
  const editItem = (index) => {
    let editList = listItem.find((elem) => {
      return elem.id === index;
    });
    console.log(editList);
    setToggle(false);
    setItem(editList.item);
    setItemEdit(index)
  }

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

            {toggle ? <button onClick={addItem}><MdAdd /></button> :
              <button onClick={addItem}><BiEdit/> 
              </button>}     
          </div>

          <div className="listDiv">
            {listItem.map((currElem) => {
              return (
                <List text={currElem.item} key={currElem.id} id={currElem.id} onSelect={delItem}
                  onEdit={editItem} />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoList;
