import React, { useState } from "react";
import FormContainer from "components/common/form/FormContainer";
import FormHeader from "components/common/form/FormHeader";
import Input from "components/common/input/Input";
import { useDispatch } from "react-redux";
import { addTodosAsync } from "redux/todos/todosSlice";
import { toast } from "react-toastify";
import Modal from "components/common/modal/Modal";
import Button from "components/common/button/Button";

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
    <Modal onClose={closeModalHandler}>
      <FormContainer>
        <FormHeader>Add Todo</FormHeader>

        <form onSubmit={(e) => onFormSubmitHandler(e)}>
          <Input
            type="number"
            min="1"
            name="userId"
            placeholder="userId"
            value={userId}
            onChange={(e) => onInputChangeHandler(e)}
          ></Input>
          <Input
            type="text"
            name="title"
            placeholder="title"
            value={title}
            onChange={(e) => onInputChangeHandler(e)}
          ></Input>

          <div>
            <Button type="submit" color="bg-belizeHole hover:bg-peterRiver">
              Add Todo
            </Button>
          </div>
        </form>
      </FormContainer>
    </Modal>
  );
};

export default AddTodoModal;
