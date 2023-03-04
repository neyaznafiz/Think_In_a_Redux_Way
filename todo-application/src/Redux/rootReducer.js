import todosReducer from "./ToDos/reducer.todos";
import filtersReducer from "./Filters/reducer.filters";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  todos: todosReducer,
  filters: filtersReducer,
});

export default rootReducer;
