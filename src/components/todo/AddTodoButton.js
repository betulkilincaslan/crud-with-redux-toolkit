const AddTodoButton = ({ children, type, onClick }) => {
  return (
    <div className="mb-4 flex">
      <button
        className="bg-yellow-500 px-4 py-2 hover:bg-yellow-400 transition-all duration-300 text-white font-semibold ml-auto"
        onClick={onClick}
        type={type || "button"}
      >
        {children}
      </button>
    </div>
  );
};

export default AddTodoButton;
