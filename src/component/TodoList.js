import React from 'react'
import './todolist.css'
import { FcList, FcTodoList } from "react-icons/fc";
import InputList from "../component/InputList";
import List from "../component/List";

const TodoList = () => {
  return (
    <>
      <div className="container">
        <div className="content">
          <div className="headerDiv">
            <h1><FcTodoList/> ToDo-List</h1>
          </div>
          <InputList/>
          <List/>
        </div>
      </div>
    </>
  )
}

export default TodoList
