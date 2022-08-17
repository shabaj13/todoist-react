import React from "react";
import { BiEdit, BiTrash } from "react-icons/bi";
import "./list.css";
const List = ({text,id,onSelect,onEdit}) => {
  return (
    <>
      <div className="listContent">
        <p>{ text}</p>
        <div className="opt">
          <BiEdit className="editBtn" onClick={() => { onEdit(id) }}/>
          <BiTrash className="delBtn"  onClick={()=> {onSelect(id)}}/>
        </div>
      </div>
    </>
  );
};

export default List;
