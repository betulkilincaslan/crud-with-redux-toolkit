import AddTodoModalContainer from "components/todo/AddTodoModalContainer";
import TodoTable from "components/todo/TodoTable";

const HomeScreen = () => {
  return (
    <>
      <AddTodoModalContainer />
      <TodoTable />
    </>
  );
};

export default HomeScreen;
