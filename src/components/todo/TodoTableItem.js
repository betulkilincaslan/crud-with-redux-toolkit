import React from "react";

const TodoTableItem = () => {
  return (
    <tr className="border-b">
      <td className="font-light px-6 py-4 whitespace-nowrap"></td>
      <td className="font-light px-6 py-4 whitespace-nowrap text-left"></td>
      <td className="font-light px-6 py-4 whitespace-nowrap"></td>
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
