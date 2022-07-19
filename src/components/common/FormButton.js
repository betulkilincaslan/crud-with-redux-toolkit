const FormButton = ({ children, type, onClick }) => {
  return (
    <button
      className={`w-full bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-2 px-4 tracking-wide transition-all duration-300`}
      type={type || "button"}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default FormButton;
