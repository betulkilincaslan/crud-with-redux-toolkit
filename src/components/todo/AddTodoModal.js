import React, { useState } from "react";
import FormButton from "components/common/FormButton";
import FormContainer from "components/common/FormContainer";
import FormHeader from "components/common/FormHeader";
import FormInput from "components/common/FormInput";
import FormLabel from "components/common/FormLabel";
import { useDispatch } from "react-redux";
import { addTodosAsync } from "redux/todos/todosSlice";
import { toast } from "react-toastify";

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

  return (
    <>
      <div className="overflow-x-hidden overflow-y-auto fixed inset-0 z-50">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          <section className="py-12 w-full min-h-max fixed inset-0 top-20">
            <FormContainer>
              <div className="flex">
                <span className="ml-auto">
                  <i
                    className="bx bx-x text-white text-2xl p-1 cursor-pointer"
                    onClick={() => {
                      setShowAddTodoModal(false);
                    }}
                  ></i>
                </span>
              </div>
              <FormHeader>Add Todo</FormHeader>

              <form onSubmit={(e) => onFormSubmitHandler(e)}>
                <div>
                  <FormLabel htmlFor="userId">User Id</FormLabel>

                  <FormInput
                    type="number"
                    min="1"
                    name="userId"
                    placeholder="userId"
                    value={userId}
                    onChange={(e) => onInputChangeHandler(e)}
                  ></FormInput>
                </div>
                <div>
                  <FormLabel htmlFor="title">Title</FormLabel>

                  <FormInput
                    type="text"
                    name="title"
                    placeholder="title"
                    value={title}
                    onChange={(e) => onInputChangeHandler(e)}
                  ></FormInput>
                </div>

                <div>
                  <FormButton type="submit" color="cyan">
                    Add Todo
                  </FormButton>
                </div>
              </form>
            </FormContainer>
          </section>
        </div>
      </div>
      <div className="opacity-40 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default AddTodoModal;
