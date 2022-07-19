const ModalHeader = ({ onClose }) => {
  return (
    <div className="flex px-2 py-1">
      <span className="ml-auto">
        <i
          className="bx bx-x text-white text-2xl p-1 cursor-pointer"
          onClick={onClose}
        ></i>
      </span>
    </div>
  );
};

export default ModalHeader;
