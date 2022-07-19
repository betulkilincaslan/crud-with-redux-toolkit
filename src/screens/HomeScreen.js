import AddTodoContainer from "components/todo/addTodo/AddTodoContainer";
import { useSelector, useDispatch } from "react-redux";
import { getTodosAsync, todoData } from "redux/todos/todosSlice";
import Spinner from "components/common/Spinner";
import { useEffect } from "react";
import TodosContainer from "components/todo/TodosContainer";

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
          <TodosContainer todos={todos} />
        </>
      )}
    </>
  );
};

export default HomeScreen;
