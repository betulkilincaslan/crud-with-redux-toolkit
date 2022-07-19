import React, { useState } from "react";
import FormButton from "components/common/form/FormButton";
import FormContainer from "components/common/form/FormContainer";
import FormHeader from "components/common/form/FormHeader";
import FormInput from "components/common/form/FormInput";
import { useDispatch } from "react-redux";
import { addTodosAsync } from "redux/todos/todosSlice";
import { toast } from "react-toastify";
import ModalContainer from "components/common/modal/ModalContainer";

const AddTodoModal = ({ setShowAddTodoModal }) => {
  const dispatch = useDispatch();

  const [todoFields, setTodoFields] = useState({
    userId: "",
    title: "",
    completed: false,
  });
  const { userId, title, completed } = todoFields;

  const onInputChangeHandler = (e) => {
    setTodoFields({
      ...todoFields,
      [e.target.name]: e.target.value,
    });
  };

  const onFormSubmitHandler = async (e) => {
    e.preventDefault();

    if (!userId || !title) {
      return toast.warning("Please fill in all fields!");
    }

    const newTodoData = {
      userId,
      title,
      completed,
    };

    await dispatch(addTodosAsync(newTodoData));

    toast.success("Todo added successfully!");

    setShowAddTodoModal(false);
  };

  const closeModalHandler = () => {
    setShowAddTodoModal(false);
  };

  return (
    <ModalContainer onClose={closeModalHandler}>
      <FormContainer>
        <FormHeader>Add Todo</FormHeader>

        <form onSubmit={(e) => onFormSubmitHandler(e)}>
          <FormInput
            type="number"
            min="1"
            name="userId"
            placeholder="userId"
            value={userId}
            onChange={(e) => onInputChangeHandler(e)}
          ></FormInput>
          <FormInput
            type="text"
            name="title"
            placeholder="title"
            value={title}
            onChange={(e) => onInputChangeHandler(e)}
          ></FormInput>

          <div>
            <FormButton type="submit">Add Todo</FormButton>
          </div>
        </form>
      </FormContainer>
    </ModalContainer>
  );
};

export default AddTodoModal;
