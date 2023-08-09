import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";

function TodoComponent() {

    const [title,setTitle]=useState("")
  return (
    <div>
      <h1>Todo Component</h1>
      <input type="text" value={title}></input>

    </div>
  );
}

export default TodoComponent;
