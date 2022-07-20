import React, { useEffect, useState } from "react";
import TodoItem from "./TodoItem";
import UpdateTodoModal from "./updateTodo/UpdateTodoModal";
import DeleteTodoModal from "./deleteTodo/DeleteTodoModal";
import SearchContainer from "components/search/SearchContainer";
import { useSelector } from "react-redux";
import { sortTodosByIdDescending } from "redux/todos/todosSlice";
import Pagination from "components/common/Pagination";

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

  const onSearchInputChangeHandler = (e) => {
    setSearchField(e.target.value);
    currentPage !== 1 && setCurrentPage(1);
  };

  useEffect(() => {
    const filterTodos = () => {
      const filteredTodos = sortedTodos.filter(
        (todo) =>
          todo.title.match(new RegExp(searchField, "i")) ||
          todo.userId.toString().match(new RegExp(searchField, "i"))
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
        <SearchContainer
          onSearchInputChangeHandler={onSearchInputChangeHandler}
          searchField={searchField}
        />
        <div className="md:grid grid-cols-10 gap-2 hidden pb-4 font-semibold px-2">
          <div>userId</div>
          <div className="col-span-6 text-left">Title</div>
          <div>Completed</div>
          <div>Edit</div>
          <div>Delete</div>
        </div>

        <div className="min-h-[70vh]">
          {currentTodos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              updateTodoHandler={updateTodoHandler}
              deleteTodoHandler={deleteTodoHandler}
            />
          ))}
        </div>
      </section>

      <div className="flex items-center justify-center my-4">
        <Pagination
          pageNumbers={pageNumbers}
          setCurrentPage={setCurrentPage}
          currentButton={currentButton}
          setCurrentButton={setCurrentButton}
        />
      </div>
    </>
  );
};

export default TodosContainer;
