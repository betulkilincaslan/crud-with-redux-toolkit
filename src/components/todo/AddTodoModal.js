import FormButton from "components/common/FormButton";
import FormContainer from "components/common/FormContainer";
import FormHeader from "components/common/FormHeader";
import FormInput from "components/common/FormInput";
import FormLabel from "components/common/FormLabel";

const AddTodoModal = ({ setShowAddTodoModal }) => {
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

              <form>
                <div>
                  <FormLabel htmlFor="userId">User Id</FormLabel>

                  <FormInput
                    type="number"
                    min="1"
                    name="userId"
                    placeholder="userId"
                  ></FormInput>
                </div>
                <div>
                  <FormLabel htmlFor="title">Title</FormLabel>

                  <FormInput
                    type="text"
                    name="title"
                    placeholder="title"
                  ></FormInput>
                </div>
                <div className="flex mb-3">
                  <FormLabel htmlFor="completed">Completed</FormLabel>
                  <input
                    type="checkbox"
                    className="accent-cyan-300 md:accent-cyan-500 cursor-pointer w-4 h-4 ml-2"
                  />
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
