import { useDispatch } from "react-redux";
import { toggleCompletedAsync } from "redux/todos/todosSlice";

const TodoItem = ({ todo, updateTodoHandler, deleteTodoHandler }) => {
  const { userId, id, title, completed } = todo;

  const dispatch = useDispatch();

  const changeCompletedHandler = async (id, completed) => {
    await dispatch(toggleCompletedAsync({ id, todoData: { completed } }));
  };

  return (
    <div className="grid grid-cols-10 gap-2 py-2 mx-2 hover:bg-midnightBlue rounded-md">
      <div>{userId}</div>
      <div className="col-span-6 text-left">{title}</div>
      <div>
        <input
          type="checkbox"
          className="accent-asbestos cursor-pointer w-4 h-4 ml-2   focus:ring-concrete ring-offset-asbestos focus:ring-2 bg-asbestos border-concrete"
          checked={completed}
          onChange={() => changeCompletedHandler(id, !completed)}
        />
      </div>
      <div>
        <span onClick={() => updateTodoHandler(id)}>
          <i className="bx bx-edit-alt text-peterRiver hover:text-belizeHole text-2xl cursor-pointer"></i>
        </span>
      </div>
      <div>
        <span onClick={() => deleteTodoHandler(id)}>
          <i className="bx bx-trash text-clouds hover:text-silver text-2xl cursor-pointer"></i>
        </span>
      </div>
    </div>
  );
};

export default TodoItem;
