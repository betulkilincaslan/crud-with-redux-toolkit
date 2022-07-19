import React from "react";
import { useDispatch } from "react-redux";
import { toggleCompleted } from "redux/todos/todosSlice";

const TodoTableItem = ({ todo, updateTodoHandler, deleteTodoHandler }) => {
  const { userId, id, title, completed } = todo;

  const dispatch = useDispatch();

  const changeCompletedHandler = () => {
    dispatch(toggleCompleted({ id }));
  };

  return (
    <tr className="border-b-4 border-midnightBlue">
      <td className="font-light px-6 whitespace-nowrap">{userId}</td>
      <td className="font-light px-6 whitespace-nowrap text-left">{title}</td>
      <td className="font-light px-6 whitespace-nowrap">
        <input
          type="checkbox"
          className="accent-cyan-300 md:accent-cyan-500 cursor-pointer w-4 h-4"
          checked={completed}
          onChange={() => changeCompletedHandler()}
        />
      </td>
      <td className="font-light px-6 py-4 whitespace-nowrap">
        <span onClick={() => updateTodoHandler(id)}>
          <i className="bx bx-edit-alt text-belizeHole hover:text-peterRiver text-2xl cursor-pointer"></i>
        </span>
      </td>
      <td className="font-light px-6 py-4 whitespace-nowrap">
        <span onClick={() => deleteTodoHandler(id)}>
          <i className="bx bx-trash text-pumpkin hover:text-carrot text-2xl cursor-pointer"></i>
        </span>
      </td>
    </tr>
  );
};

export default TodoTableItem;
