import { useDispatch } from "react-redux";
import { toggleCompleted } from "redux/todos/todosSlice";

const TodoItem = ({ todo, updateTodoHandler, deleteTodoHandler }) => {
  const { userId, id, title, completed } = todo;

  const dispatch = useDispatch();

  const changeCompletedHandler = () => {
    dispatch(toggleCompleted({ id }));
  };

  return (
    <div className="grid grid-cols-10 gap-2 my-2">
      <div>{userId}</div>
      <div className="col-span-6 text-left">{title}</div>
      <div>
        <input
          type="checkbox"
          className="accent-belizeHole md:accent-peterRiver cursor-pointer w-4 h-4"
          checked={completed}
          onChange={() => changeCompletedHandler()}
        />
      </div>
      <div>
        <span onClick={() => updateTodoHandler(id)}>
          <i className="bx bx-edit-alt text-belizeHole hover:text-peterRiver text-2xl cursor-pointer"></i>
        </span>
      </div>
      <div>
        <span onClick={() => deleteTodoHandler(id)}>
          <i className="bx bx-trash text-pumpkin hover:text-carrot text-2xl cursor-pointer"></i>
        </span>
      </div>
    </div>
  );
};

export default TodoItem;
