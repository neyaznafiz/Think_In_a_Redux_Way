import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { statusChanged } from "../Redux/Filters/action.filters";

// todos formatter
const numebrOfTodos = (no_of_todos) => {
  switch (no_of_todos) {
    case 0:
      return "No task";

    case 1:
      return "1 task";

    default:
      return `${no_of_todos} tasks`;
  }
};

const Footer = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const filters = useSelector((state) => state.filters);
  const todosRemaining = todos.filter((todo) => !todo.completed).length;

  const handleStatusChange = (status) => {
    dispatch(statusChanged(status));
  };

  return (
    <div className="mt-4 flex justify-between text-xs text-gray-500">
      {/* incomplete tasks */}
      <p>{numebrOfTodos(todosRemaining)} left</p>

      {/* filter section */}
      <ul className="flex space-x-1 items-center text-xs">
        <li
          onClick={() => handleStatusChange("All")}
          className={`cursor-pointer ${filters.status === "All" && 'font-bold'} `}
        >
          All
        </li>
        <li>|</li>
        <li
          onClick={() => handleStatusChange("Incomplete")}
          className={`cursor-pointer ${filters.status === "Incomplete" && 'font-bold'} `}
        >
          Incomplete
        </li>
        <li>|</li>
        <li
          onClick={() => handleStatusChange("Complete")}
          className={`cursor-pointer ${filters.status === "Complete" && 'font-bold'} `}
        >
          Complete
        </li>
        <li></li>
        <li></li>

        {/* color */}
        <li className="h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer bg-green-500"></li>
        <li className="h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer"></li>
        <li className="h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer"></li>
      </ul>
    </div>
  );
};

export default Footer;
