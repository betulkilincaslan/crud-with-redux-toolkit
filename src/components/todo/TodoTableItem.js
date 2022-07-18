import React from "react";
import { useDispatch } from "react-redux";
import { toggleCompleted } from "redux/todos/todosSlice";

const TodoTableItem = ({ todo }) => {
  const { userId, id, title, completed } = todo;

  const dispatch = useDispatch();

  const changeCompletedHandler = () => {
    dispatch(toggleCompleted({ id }));
  };

  return (
    <tr className="border-b">
      <td className="font-light px-6 py-4 whitespace-nowrap">{userId}</td>
      <td className="font-light px-6 py-4 whitespace-nowrap text-left">
        {title}
      </td>
      <td className="font-light px-6 py-4 whitespace-nowrap">
        <input
          type="checkbox"
          className="accent-cyan-300 md:accent-cyan-500 cursor-pointer w-4 h-4"
          checked={completed}
          onChange={() => changeCompletedHandler()}
        />
      </td>
      <td className="font-light px-6 py-4 whitespace-nowrap">
        <i className="bx bx-edit-alt text-yellow-500 text-2xl cursor-pointer"></i>
      </td>
      <td className="font-light px-6 py-4 whitespace-nowrap">
        <i className="bx bx-trash text-rose-500 text-2xl cursor-pointer"></i>
      </td>
    </tr>
  );
};

export default TodoTableItem;
