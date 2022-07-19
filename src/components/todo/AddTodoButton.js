const AddTodoButton = ({ children, type, onClick }) => {
  return (
    <div className="mb-4 flex">
      <button
        className="bg-nephritis px-4 rounded-tl-xl rounded-br-xl py-2 hover:bg-emerald transition-all duration-300 text-white font-semibold ml-auto"
        onClick={onClick}
        type={type || "button"}
      >
        {children}
      </button>
    </div>
  );
};

export default AddTodoButton;
