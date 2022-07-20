const Button = ({ children, type, onClick, color }) => {
  return (
    <button
      className={`w-full text-clouds font-bold py-2 px-4 tracking-wide transition-all duration-300 rounded-tl-xl rounded-br-xl ${
        color && color
      }`}
      type={type || "button"}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
