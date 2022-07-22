import React, { useEffect, useState } from "react";
import TodoItem from "./TodoItem";
import UpdateTodoModal from "./updateTodo/UpdateTodoModal";
import DeleteTodoModal from "./deleteTodo/DeleteTodoModal";
import { useSelector } from "react-redux";
import { sortTodosByIdDescending } from "redux/todos/todosSlice";
import Pagination from "components/common/Pagination";
import Input from "components/common/input/Input";

const TodosContainer = ({ todos }) => {
  const sortedTodos = useSelector(sortTodosByIdDescending);
  const [updatedTodoItem, setUpdatedTodoItem] = useState({});
  const [showUpdateTodoModal, setShowUpdateTodoModal] = useState(false);
  const [deletedTodoItem, setDeletedTodoItem] = useState({});
  const [showDeleteTodoModal, setShowDeleteTodoModal] = useState(false);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [searchField, setSearchField] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [todosPerPage] = useState(20);
  const pageNumbers = [];
  const [currentButton, setCurrentButton] = useState(1);

  // PAGINATION
  // get current page todos
  const indexOfLastTodo = currentPage * todosPerPage;
  const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
  // get total page number
  const totalTodos =
    filteredTodos.length > 0 ? filteredTodos.length : sortedTodos.length;
  const totalPageNumber = Math.ceil(totalTodos / todosPerPage);
  // get current todos
  const currentTodos =
    filteredTodos.length > 0
      ? filteredTodos.slice(indexOfFirstTodo, indexOfLastTodo)
      : sortedTodos.slice(indexOfFirstTodo, indexOfLastTodo);

  for (let i = 1; i <= totalPageNumber; i++) {
    pageNumbers.push(i);
  }

  // SEARCH
  const onSearchInputChangeHandler = (e) => {
    setSearchField(e.target.value);
    currentPage !== 1 && setCurrentPage(1);
  };

  const onFormSubmitHandler = (e) => {
    e.preventDefault();
    setSearchField("");
  };

  useEffect(() => {
    const filterTodos = () => {
      const filteredTodos = sortedTodos.filter(
        (todo) =>
          todo.title.toLocaleLowerCase().includes(searchField) ||
          todo.userId.toString().includes(searchField)
      );
      return filteredTodos;
    };

    setFilteredTodos(filterTodos);
  }, [searchField, sortedTodos]);

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

      <section className="grid grid-cols-1 bg-wetAsphalt rounded-tl-xl rounded-br-xl text-center">
        <form onSubmit={(e) => onFormSubmitHandler(e)}>
          <div className="py-4 mx-4">
            <Input
              placeholder="Search Todo"
              type="text"
              name="searchField"
              value={searchField}
              onChange={(e) => onSearchInputChangeHandler(e)}
            ></Input>
          </div>
        </form>

        <div className="md:grid grid-cols-10 gap-2 hidden pb-4 font-semibold px-2">
          <div>User ID</div>
          <div className="col-span-6 text-left">Title</div>
          <div>Completed</div>
          <div>Edit</div>
          <div>Delete</div>
        </div>

        <div className="min-h-[600px]">
          {filteredTodos.length === 0 ? (
            <p className="text-center font-semibold mb-3 tracking-wide text-pumpkin text-xl py-8 px-4">
              There is no todo with that title!
            </p>
          ) : (
            currentTodos.map((todo) => (
              <TodoItem
                key={todo.title}
                todo={todo}
                updateTodoHandler={updateTodoHandler}
                deleteTodoHandler={deleteTodoHandler}
              />
            ))
          )}
        </div>
      </section>

      {filteredTodos.length > 0 && (
        <div className="flex items-center justify-center my-4">
          <Pagination
            pageNumbers={pageNumbers}
            setCurrentPage={setCurrentPage}
            currentButton={currentButton}
            setCurrentButton={setCurrentButton}
          />
        </div>
      )}
    </>
  );
};

export default TodosContainer;
