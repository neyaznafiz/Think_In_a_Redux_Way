import {
  ADDED,
  ALL_COMPLETED,
  CLEAR_COMPLETED,
  COLOR_SELECTED,
  DELETED,
  TOGGLED,
} from "./actionTypes.todos";
import { initialState } from "./initialState.todos";

// unique id generator function
const nextTodoId = (todos) => {
  const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
  return maxId + 1;
};

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    // todo added case
    case ADDED:
      return [
        ...state,
        {
          id: nextTodoId(state),
        },
      ];

    //   completed or not toggle case
    case TOGGLED:
      return state.map((todo) => {
        if (todo.id !== action.payload) {
          return todo;
        }
        return {
          ...todo,
          completed: !todo.completed,
        };
      });

    //   color selected case
    case COLOR_SELECTED:
      const { todoId, color } = action.payload;
      return state.map((todo) => {
        if (todo.id !== todoId) {
          return todo;
        }

        return {
          ...todo,
          color: color,
        };
      });

    //   delete todo
    case DELETED:
      return state.filter((todo) => todo.id !== action.payload);

    //   all completed case
    case ALL_COMPLETED:
      return state.map((todo) => {
        return {
          ...todo,
          completed: true,
        };
      });

    //   clear completed todo case
    case CLEAR_COMPLETED:
      return state.filter((todo) => !todo.completed);

    default:
      return state;
  }
};

export default todosReducer;
