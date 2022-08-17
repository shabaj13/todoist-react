import React from "react";
import { BiTrash } from "react-icons/bi";
import "./list.css";
const List = ({text,id,onSelect}) => {
  return (
    <>
      <div className="listContent">
        <p>{ text}</p>
        <div className="opt">
          <BiTrash className="delBtn"  onClick={()=> {onSelect(id)}}/>
        </div>
      </div>
    </>
  );
};

export default List;
