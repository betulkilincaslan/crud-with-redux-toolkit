import AddTodoContainer from "components/todo/addTodo/AddTodoContainer";
import { useSelector, useDispatch } from "react-redux";
import { getTodosAsync, todoData } from "redux/todos/todosSlice";
import Spinner from "components/common/Spinner";
import { useEffect } from "react";
import TodosContainer from "components/todo/TodosContainer";
import { useNavigate } from "react-router-dom";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const todos = useSelector(todoData);
  const isLoading = useSelector((state) => state.todos.isLoading);

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getTodosAsync());
  }, [dispatch]);

  const logoutHandler = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    navigate("/");
  };

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <AddTodoContainer />
          <TodosContainer todos={todos} />
          <div className="flex cursor-pointer mt-8">
            <span
              className="font-semibold text-sm tracking-wide text-clouds hover:text-silver transition-all duration-200 flex items-center"
              onClick={logoutHandler}
            >
              Logout
              <i className="bx bx-log-out-circle"></i>
            </span>
          </div>
        </>
      )}
    </>
  );
};

export default HomeScreen;
