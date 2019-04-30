import React, { Component } from "react";
function TodoItem(props) {
    return (
             
        <div className="todo__item">
            <p><input type="checkbox" checked={props.completed}/>Text: {props.text}</p>
            
        </div>
          )
}

 export default TodoItem;