const FormButton = ({ children, type, onClick }) => {
  return (
    <button
      className={`w-full bg-darkMountain hover:bg-wildCaribbean text-lightBlueBallerina font-bold py-2 px-4 tracking-wide transition-all duration-300 rounded-tl-xl rounded-br-xl`}
      type={type || "button"}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default FormButton;
