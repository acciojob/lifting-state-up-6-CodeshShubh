import React, { useState } from "react";
import "./../styles/App.css";
import TodoList from "./TodoList";

const App = () => {
  const [todos, settodos] = useState([
    {
      text: "Learn React",
      complete: false,
    },
    {
      text: "Build a React app",
      complete: false,
    },
    {
      text: "Deploy the React app",
      complete: false,
    },
  ]);
  const handleComplete=(index)=> {
    settodos(todos.map((items, i)=>{
      if(i===index){
        // console.log(i)
        return {...items , complete:true}
        
      }
      // console.log('click2')
 return items
    }));
    
  }
  return (
    <div>
      <h1>parent component</h1>
      {/* {console.log(todos)} */}
      <TodoList todos={todos} handleComplete={handleComplete} />
    </div>
  );
};

export default App;
