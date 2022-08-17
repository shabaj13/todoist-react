import React from 'react'
import { BiEdit, BiTrash } from "react-icons/bi";
import './list.css'
const List = () => {
  return (
    <>
      <div className="listDiv">
            <div className="listContent">
              <p>Your list</p>
              <div className="opt">
                <BiEdit />
                <BiTrash/>
              </div>
            </div>
          </div>
    </>
  )
}

export default List
