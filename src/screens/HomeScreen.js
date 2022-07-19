import AddTodoContainer from "components/todo/AddTodoContainer";
import TodoTable from "components/todo/TodoTable";
import { useSelector, useDispatch } from "react-redux";
import {
  getTodosAsync,
  todoData,
  sortTodosByIdDescending,
} from "redux/todos/todosSlice";
import Spinner from "components/common/Spinner";
import { useEffect, useState } from "react";
import SearchContainer from "components/search/SearchContainer";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const todos = useSelector(todoData);
  const sortedTodos = useSelector(sortTodosByIdDescending);
  const isLoading = useSelector((state) => state.todos.isLoading);

  const [searchField, setSearchField] = useState("");

  let filteredTodos = sortedTodos.filter(
    (todo) =>
      todo.title.match(new RegExp(searchField, "i")) ||
      todo.userId.toString().match(new RegExp(searchField, "i"))
  );
  const onSearchInputChangeHandler = (e) => {
    setSearchField(e.target.value);
  };

  useEffect(() => {
    dispatch(getTodosAsync());
  }, [dispatch]);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <AddTodoContainer />
          <SearchContainer
            onSearchInputChangeHandler={onSearchInputChangeHandler}
            searchField={searchField}
          />
          <TodoTable todos={todos} filteredTodos={filteredTodos} />
        </>
      )}
    </>
  );
};

export default HomeScreen;
