const FormButton = (props) => {
  return (
    <button
      className={`w-full bg-${props.color}-500 hover:bg-${props.color}-400 text-white font-bold py-2 px-4 mb-6 rounded tracking-wide transition-all duration-300`}
      type={props.type || "button"}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default FormButton;
