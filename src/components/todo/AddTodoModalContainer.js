import React, { useState } from "react";
import AddTodoButton from "./AddTodoButton";
import AddTodoModal from "./AddTodoModal";

const AddTodoModalContainer = () => {
  const [showAddTodoModal, setShowAddTodoModal] = useState(false);
  return (
    <>
      <AddTodoButton type="button" onClick={() => setShowAddTodoModal(true)}>
        Add Todo
      </AddTodoButton>

      {showAddTodoModal ? (
        <AddTodoModal setShowAddTodoModal={setShowAddTodoModal} />
      ) : null}
    </>
  );
};

export default AddTodoModalContainer;
