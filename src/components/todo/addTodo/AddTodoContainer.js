import React, { useState } from "react";
import Button from "components/common/button/Button";
import AddTodoModal from "./AddTodoModal";

const AddTodoContainer = () => {
  const [showAddTodoModal, setShowAddTodoModal] = useState(false);

  return (
    <>
      <div className="mb-4 flex items-center justify-between">
        <h1 className="font-semibold tracking-wide text-peterRiver text-xl">
          Todo App
        </h1>
        <div className="w-36">
          <Button
            type="button"
            onClick={() => setShowAddTodoModal(true)}
            color="bg-belizeHole hover:bg-peterRiver"
          >
            Add Todo
          </Button>
        </div>
      </div>

      {showAddTodoModal ? (
        <AddTodoModal setShowAddTodoModal={setShowAddTodoModal} />
      ) : null}
    </>
  );
};

export default AddTodoContainer;
