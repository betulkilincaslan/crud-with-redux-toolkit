import AddTodoContainer from "components/todo/AddTodoContainer";
import TodoTable from "components/todo/TodoTable";
import { useSelector, useDispatch } from "react-redux";
import { getTodosAsync, todoData } from "redux/todos/todosSlice";
import Spinner from "components/common/Spinner";
import { useEffect } from "react";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const todos = useSelector(todoData);
  const isLoading = useSelector((state) => state.todos.isLoading);

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
          <TodoTable todos={todos} />
        </>
      )}
    </>
  );
};

export default HomeScreen;
