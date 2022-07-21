import React, { useState, useEffect } from "react";
import FormContainer from "components/common/form/FormContainer";
import FormHeader from "components/common/form/FormHeader";
import Input from "components/common/input/Input";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { updateTodosAsync } from "redux/todos/todosSlice";
import Modal from "components/common/modal/Modal";
import Button from "components/common/button/Button";

const UpdateTodoModal = ({ updatedTodoItem, setShowUpdateTodoModal }) => {
  const dispatch = useDispatch();

  const { userId, id, title, completed } = updatedTodoItem[0];
  const [updatedUserId, setUpdatedUserId] = useState("");
  const [updatedTodoTitle, setUpdatedTodoTitle] = useState("");
  const [updatedTodoCompleted, setUpdatedTodoCompleted] = useState(completed);

  useEffect(() => {
    if (updatedTodoItem.length > 0) {
      setUpdatedUserId(userId);
      setUpdatedTodoTitle(title);
      setUpdatedTodoCompleted(completed);
    }
  }, [updatedTodoItem, userId, title, completed]);

  const onFormSubmitHandler = async (e) => {
    e.preventDefault();

    if (!updatedUserId || !updatedTodoTitle) {
      return toast.warning("Please fill in all fields!");
    }

    const updatedTodoData = {
      userId: updatedUserId,
      id,
      title: updatedTodoTitle,
      completed: updatedTodoCompleted,
    };

    await dispatch(updateTodosAsync(updatedTodoData));

    toast.success("Todo updated successfully!");

    setShowUpdateTodoModal(false);
  };

  const closeModalHandler = () => {
    setShowUpdateTodoModal(false);
  };

  return (
    <Modal onClose={closeModalHandler}>
      <FormContainer>
        <form onSubmit={(e) => onFormSubmitHandler(e)}>
          <Input
            type="number"
            min="1"
            name="userId"
            placeholder="Your user id"
            value={updatedUserId}
            onChange={(e) => setUpdatedUserId(e.target.value)}
          ></Input>
          <Input
            type="text"
            name="title"
            placeholder="Your todo"
            value={updatedTodoTitle}
            onChange={(e) => setUpdatedTodoTitle(e.target.value)}
          ></Input>

          <div className="flex mb-3">
            <input
              type="checkbox"
              className="accent-belizeHole md:accent-peterRiver cursor-pointer w-4 h-4 ml-2   focus:ring-belizeHole ring-offset-asbestos focus:ring-2 bg-asbestos border-concrete"
              checked={updatedTodoCompleted}
              onChange={() => setUpdatedTodoCompleted(!updatedTodoCompleted)}
            />
          </div>

          <div>
            <Button type="submit" color="bg-belizeHole hover:bg-peterRiver">
              Update Todo
            </Button>
          </div>
        </form>
      </FormContainer>
    </Modal>
  );
};

export default UpdateTodoModal;
