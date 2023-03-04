import React from "react";
import { useSelector } from "react-redux";
import ToDo from "./ToDo";

const ToDoList = () => {
  const todos = useSelector((state) => state.todos);

  return (
    <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
      {todos.map((todo) => (
        <ToDo todo={todo} key={todo.id}/>
      ))}
    </div>
  );
};

export default ToDoList;
