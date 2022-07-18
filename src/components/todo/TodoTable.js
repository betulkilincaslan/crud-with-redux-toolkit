import React, { useEffect } from "react";
import TodoTableItem from "./TodoTableItem";
import { useSelector, useDispatch } from "react-redux";
import { getTodosAsync, todoData } from "redux/todos/todosSlice";

const TodoTable = () => {
  const dispatch = useDispatch();
  const todos = useSelector(todoData);

  useEffect(() => {
    dispatch(getTodosAsync());
  }, [dispatch]);

  return (
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
                    {todos.map((todo) => (
                      <TodoTableItem key={todo.id} todo={todo} />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TodoTable;
