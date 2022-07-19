import React, { useEffect, useState } from "react";
import TodoTableItem from "./TodoTableItem";
import UpdateTodoModal from "./UpdateTodoModal";
import DeleteTodoModal from "./DeleteTodoModal";
import SearchContainer from "components/search/SearchContainer";
import { useSelector } from "react-redux";
import { sortTodosByIdDescending } from "redux/todos/todosSlice";

const TodoTable = ({ todos }) => {
  const sortedTodos = useSelector(sortTodosByIdDescending);
  const [updatedTodoItem, setUpdatedTodoItem] = useState({});
  const [showUpdateTodoModal, setShowUpdateTodoModal] = useState(false);

  const [deletedTodoItem, setDeletedTodoItem] = useState({});
  const [showDeleteTodoModal, setShowDeleteTodoModal] = useState(false);

  const [searchField, setSearchField] = useState("");

  const onSearchInputChangeHandler = (e) => {
    setSearchField(e.target.value);
  };

  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    let filteredTodos = sortedTodos.filter(
      (todo) =>
        todo.title.match(new RegExp(searchField, "i")) ||
        todo.userId.toString().match(new RegExp(searchField, "i"))
    );
    setFilteredTodos(filteredTodos);
  }, [searchField]);

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

      <section className="py-4 text-center w-full min-h-max">
        <div className="grid grid-cols-1 bg-wetAsphalt">
          <div className="px-2">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full sm:px-6 lg:px-8">
                <div className="overflow-x-auto">
                  <SearchContainer
                    onSearchInputChangeHandler={onSearchInputChangeHandler}
                    searchField={searchField}
                  />

                  <table className="min-w-full">
                    <thead className="border-b-4 border-midnightBlue">
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
