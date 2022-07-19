import ModalButton from "./ModalButton";

const ModalFooter = ({ onConfirm, onClose }) => {
  return (
    <div className="flex items-center justify-end px-2 py-4 border-t border-solid border-slate-200 mt-4">
      <ModalButton type="button" onClick={onConfirm} className="text-red-500">
        Confirm
      </ModalButton>
      <ModalButton type="button" onClick={onClose} className="text-white">
        Close
      </ModalButton>
    </div>
  );
};

export default ModalFooter;
