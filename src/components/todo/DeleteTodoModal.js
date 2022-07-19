import ModalContainer from "components/common/ModalContainer";
import FormHeader from "components/common/FormHeader";
import { toast } from "react-toastify";
import { deleteTodosAsync } from "redux/todos/todosSlice";
import { useDispatch } from "react-redux";

const DeleteTodoModal = ({ setShowDeleteTodoModal, deletedTodoItem }) => {
  const dispatch = useDispatch();

  const confirmDeleteTodoHandler = () => {
    let id = deletedTodoItem[0].id;
    dispatch(deleteTodosAsync(id));
    toast.success("Todo deleted successfully!");
    closeModalHandler();
  };

  const closeModalHandler = () => {
    setShowDeleteTodoModal(false);
  };
  return (
    <ModalContainer
      type="confirm"
      onClose={closeModalHandler}
      onConfirm={confirmDeleteTodoHandler}
    >
      <FormHeader> Are you sure you want to delete? </FormHeader>
    </ModalContainer>
  );
};

export default DeleteTodoModal;
