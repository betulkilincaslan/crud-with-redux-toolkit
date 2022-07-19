import React, { useState, useEffect } from "react";
import FormButton from "components/common/FormButton";
import FormContainer from "components/common/FormContainer";
import FormHeader from "components/common/FormHeader";
import FormInput from "components/common/FormInput";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { updateTodosAsync } from "redux/todos/todosSlice";
import ModalContainer from "components/common/ModalContainer";

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

    toast.success("Todo added successfully!");

    setShowUpdateTodoModal(false);
  };

  const closeModalHandler = () => {
    setShowUpdateTodoModal(false);
  };

  return (
    <ModalContainer onClose={closeModalHandler}>
      <FormContainer>
        <FormHeader> Update Todo with id: {id} </FormHeader>

        <form onSubmit={(e) => onFormSubmitHandler(e)}>
          <FormInput
            type="number"
            min="1"
            name="userId"
            placeholder="userId"
            value={updatedUserId}
            onChange={(e) => setUpdatedUserId(e.target.value)}
          ></FormInput>
          <FormInput
            type="text"
            name="title"
            placeholder="title"
            value={updatedTodoTitle}
            onChange={(e) => setUpdatedTodoTitle(e.target.value)}
          ></FormInput>

          <div className="flex mb-3">
            <input
              type="checkbox"
              className="accent-cyan-300 md:accent-cyan-500 cursor-pointer w-4 h-4 ml-2"
              checked={updatedTodoCompleted}
              onChange={() => setUpdatedTodoCompleted(!updatedTodoCompleted)}
            />
          </div>

          <div>
            <FormButton type="submit">Update Todo</FormButton>
          </div>
        </form>
      </FormContainer>
    </ModalContainer>
  );
};

export default UpdateTodoModal;
