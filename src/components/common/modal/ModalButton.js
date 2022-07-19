const ModalButton = ({ children, type, onClick, className }) => {
  return (
    <button
      className={`background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none transition-all duration-150 ${
        className && className
      }`}
      type={type || "button"}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ModalButton;
