import React, { useState } from "react";
import TodoTableItem from "./TodoTableItem";
import UpdateTodoModal from "./UpdateTodoModal";
import DeleteTodoModal from "./DeleteTodoModal";

const TodoTable = ({ todos, filteredTodos }) => {
  const [updatedTodoItem, setUpdatedTodoItem] = useState({});
  const [showUpdateTodoModal, setShowUpdateTodoModal] = useState(false);

  const [deletedTodoItem, setDeletedTodoItem] = useState({});
  const [showDeleteTodoModal, setShowDeleteTodoModal] = useState(false);

  const updateTodoHandler = (id) => {
    const updatedItem = todos.filter((todo) => todo.id === id);
    setUpdatedTodoItem(updatedItem);
    setShowUpdateTodoModal(true);
  };

  const deleteTodoHandler = (id) => {
    const deletedItem = todos.filter((todo) => todo.id === id);
    setDeletedTodoItem(deletedItem);

    setShowDeleteTodoModal(true);
  };

  return (
    <>
      {showUpdateTodoModal && (
        <UpdateTodoModal
          updatedTodoItem={updatedTodoItem}
          setShowUpdateTodoModal={setShowUpdateTodoModal}
        />
      )}
      {showDeleteTodoModal && (
        <DeleteTodoModal
          deletedTodoItem={deletedTodoItem}
          setShowDeleteTodoModal={setShowDeleteTodoModal}
        />
      )}

      <section className="py-12 text-center w-full min-h-max">
        <div className="grid grid-cols-1 bg-slate-800">
          <div className="px-2 py-4">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                <div className="overflow-x-auto">
                  <table className="min-w-full">
                    <thead className="border-b">
                      <tr>
                        <th
                          scope="col"
                          className="text-sm font-medium px-6 py-4 text-left"
                        >
                          userId
                        </th>
                        <th
                          scope="col"
                          className="text-sm font-medium px-6 py-4 text-left"
                        >
                          Title
                        </th>
                        <th
                          scope="col"
                          className="text-sm font-medium px-6 py-4 text-center"
                        >
                          Completed
                        </th>
                        <th
                          scope="col"
                          className="text-sm font-medium px-6 py-4 text-center"
                        >
                          Edit
                        </th>
                        <th
                          scope="col"
                          className="text-sm font-medium px-6 py-4 text-center"
                        >
                          Delete
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredTodos.map((todo) => (
                        <TodoTableItem
                          key={todo.id}
                          todo={todo}
                          updateTodoHandler={updateTodoHandler}
                          deleteTodoHandler={deleteTodoHandler}
                        />
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TodoTable;
