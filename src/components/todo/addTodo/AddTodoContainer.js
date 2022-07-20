import React, { useState } from "react";
import Button from "components/common/button/Button";
import AddTodoModal from "./AddTodoModal";

const AddTodoContainer = () => {
  const [showAddTodoModal, setShowAddTodoModal] = useState(false);

  return (
    <>
      <div className="mb-4 flex w-36 ml-auto">
        <Button
          type="button"
          onClick={() => setShowAddTodoModal(true)}
          color="bg-belizeHole hover:bg-peterRiver"
        >
          Add Todo
        </Button>
      </div>

      {showAddTodoModal ? (
        <AddTodoModal setShowAddTodoModal={setShowAddTodoModal} />
      ) : null}
    </>
  );
};

export default AddTodoContainer;
