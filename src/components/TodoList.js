import React from "react";

const TodoList = ({ handleComplete, todos }) => {
  return (
    <div>
      <h1>child component</h1>
      <ul>
        {todos.map((items, index) => {
          return (
            <li key={index}>
              {items.text}{" "}
              {items.complete ? (
               ''
              ) : (
                <button onClick={()=>handleComplete(index)}>complete</button>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
