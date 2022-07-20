import Modal from "components/common/modal/Modal";
import FormHeader from "components/common/form/FormHeader";
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
    <Modal
      type="confirm"
      onClose={closeModalHandler}
      onConfirm={confirmDeleteTodoHandler}
    >
      <FormHeader> Are you sure you want to delete? </FormHeader>
    </Modal>
  );
};

export default DeleteTodoModal;
